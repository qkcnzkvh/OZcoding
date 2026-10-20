const API_URL = "https://api4.binance.com/api/v3/ticker/24hr";
const STORAGE_KEY = "favorites_api";
const INITIAL_COUNT = 20;   // 처음에 보여줄 개수
const STEP = 10;            // 더보기 한 번에 늘어나는 개수

let visibleCount = INITIAL_COUNT;
let priceDir = {};              // 코인별 마지막 변동 방향 ("up" | "down")
let changedNow = new Set();     // 이번 갱신에서 가격이 바뀐 코인

const moreBtn = document.getElementById("moreBtn");

let coins = [];                 // USDT 항목만
let prevPrices = {};            // 직전 가격 (깜빡임 효과용)
let currentTab = "all";
let keyword = "";
let isFetching = false;
let favorites = new Set(loadFavorites());

const listEl = document.getElementById("list");
const statusEl = document.getElementById("status");
const favCountEl = document.getElementById("favCount");
const searchEl = document.getElementById("search");

/* ---------- LocalStorage ---------- */
function loadFavorites() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}
function saveFavorites() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
}

/* ---------- 데이터 가져오기 ---------- */
async function fetchData() {
    if (isFetching) return;       // 이전 요청이 안 끝났으면 건너뜀
    isFetching = true;
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        coins = data
            .filter((d) => d.symbol.endsWith("USDT"))
            .sort((a, b) => Number(b.quoteVolume) - Number(a.quoteVolume));

        // 추가: 가격 변동 방향 계산
        changedNow = new Set();
        coins.forEach((c) => {
            const price = Number(c.lastPrice);
            const prev = prevPrices[c.symbol];
            if (prev !== undefined && price !== prev) {
                priceDir[c.symbol] = price > prev ? "up" : "down";
                changedNow.add(c.symbol);
            }
            prevPrices[c.symbol] = price;
        });

        render();
        statusEl.className = "status";
        statusEl.textContent = `마지막 업데이트: ${new Date().toLocaleTimeString()} · USDT 마켓 ${coins.length}개`;
    } catch (err) {
        statusEl.className = "status error";
        statusEl.textContent = `데이터를 불러오지 못했습니다: ${err.message}`;
    } finally {
        isFetching = false;
    }
}

/* ---------- 렌더링 ---------- */
function formatPrice(v) {
    const n = Number(v);
    if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
    return n.toFixed(n >= 0.01 ? 4 : 8);
}
function formatVolume(v) {
    return Math.round(Number(v)).toLocaleString("en-US");
}

function render() {
    favCountEl.textContent = favorites.size;

    const q = keyword.trim().toUpperCase();
    const rows = coins.filter((c) => {
        if (currentTab === "fav" && !favorites.has(c.symbol)) return false;
        if (q && !c.symbol.includes(q)) return false;
        return true;
    });

    if (rows.length === 0) {
        moreBtn.hidden = true;
        listEl.innerHTML = `<tr><td colspan="7" class="empty">표시할 코인이 없습니다.</td></tr>`;
        return;
    }

    const visibleRows = rows.slice(0, visibleCount);

    listEl.innerHTML = visibleRows
        .map((c) => {
            const pd = priceDir[c.symbol];
            const arrow = pd
                ? `<span class="arrow ${pd} ${changedNow.has(c.symbol) ? "move-" + pd : ""}">${pd === "up" ? "▲" : "▼"}</span>`
                : "";
            const change = Number(c.priceChangePercent);
            const dir = change >= 0 ? "up" : "down";
            const base = c.symbol.replace(/USDT$/, "");
            const isFav = favorites.has(c.symbol);

            return `
        <tr>
            <td><span class="star ${isFav ? "on" : ""}" data-symbol="${c.symbol}">${isFav ? "★" : "☆"}</span></td>
            <td class="symbol">${base} <small>/USDT</small></td>
            <td class="num">${arrow}${formatPrice(c.lastPrice)}</td>
            <td class="num ${dir}">${change > 0 ? "+" : ""}${change.toFixed(2)}%</td>
            <td class="num">${formatPrice(c.highPrice)}</td>
            <td class="num">${formatPrice(c.lowPrice)}</td>
            <td class="num">${formatVolume(c.quoteVolume)}</td>
        </tr>`;
        })
        .join("");

    // 다음 비교를 위해 현재 가격 저장
    coins.forEach((c) => (prevPrices[c.symbol] = Number(c.lastPrice)));
}

/* ---------- 이벤트 ---------- */
// 관심항목 토글 (이벤트 위임)
listEl.addEventListener("click", (e) => {
    const star = e.target.closest(".star");
    if (!star) return;
    const symbol = star.dataset.symbol;
    favorites.has(symbol) ? favorites.delete(symbol) : favorites.add(symbol);
    saveFavorites();
    render();
});
// 더보기
moreBtn.addEventListener("click", () => {
    visibleCount += STEP;
    render();
});

// 탭 전환
document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
        currentTab = btn.dataset.tab;
        visibleCount = INITIAL_COUNT;
        document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === btn));
        render();
    });
});

// 검색
searchEl.addEventListener("input", (e) => {
    keyword = e.target.value;
    visibleCount = INITIAL_COUNT;
    render();
});

document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("scrollBottomBtn").addEventListener("click", () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
});

/* ---------- 시작 ---------- */
fetchData();
setInterval(fetchData, 1000);