const TOKEN_REGEX = /\d+\.?\d*|[+\-*/]/g;

const OPERATIONS = {
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b === 0) throw new Error("0으로 나눌 수 없습니다.");
        return a / b;
    },
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
};

// 지정한 연산자들을 왼쪽부터 순서대로 계산
function reduceOperators(tokens, operators) {
    let index;
    while ((index = tokens.findIndex((t) => operators.includes(t))) !== -1) {
        const left = Number(tokens[index - 1]);
        const right = Number(tokens[index + 1]);

        if (Number.isNaN(left) || Number.isNaN(right)) {
            throw new Error("잘못된 계산식입니다.");
        }

        const result = OPERATIONS[tokens[index]](left, right);
        tokens.splice(index - 1, 3, String(result));
    }
}

function calculate(expression) {
    const tokens = expression.match(TOKEN_REGEX);

    if (!tokens) {
        throw new Error("계산식을 입력해 주세요.");
    }

    reduceOperators(tokens, ["*", "/"]); // 1. 곱셈, 나눗셈 먼저
    reduceOperators(tokens, ["+", "-"]); // 2. 덧셈, 뺄셈

    if (tokens.length !== 1) {
        throw new Error("잘못된 계산식입니다.");
    }

    return Number(tokens[0]);
}

function start() {
    const expression = prompt("계산식을 입력하세요:");

    // 취소 버튼을 누르면 종료
    if (expression === null) {
        return;
    }

    try {
        const result = calculate(expression);

        alert("계산 결과: " + result);
        console.log("결과:", result);

    } catch (error) {
        alert("오류: " + error.message);
        console.log("오류:", error.message);
    }
}