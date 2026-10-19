// calculator_v2.js

let isPowerOn = true;       // 전원 상태
let currentInput = "0";     // 현재 입력 중인 숫자 문자열
let previousValue = null;   // 이전에 입력된 숫자
let operator = null;        // 선택된 연산자
let resetNext = false;      // 다음 숫자 입력 시 화면을 새로 시작할지 여부

function getDisplay() {
    return document.getElementById("display");
}
document.addEventListener("DOMContentLoaded", updateDisplay);

function updateDisplay() {
    getDisplay().value = currentInput;
}

// ON/OFF 토글
function togglePower() {
    isPowerOn = !isPowerOn;
    if (isPowerOn) {
        resetState();
        updateDisplay();
    } else {
        resetState();
        getDisplay().value = "";
    }
}

function resetState() {
    currentInput = "0";
    previousValue = null;
    operator = null;
    resetNext = false;
}

// C 버튼: 초기화
function clearDisplay() {
    if (!isPowerOn) return;
    resetState();
    updateDisplay();
}

// 숫자 및 소수점 입력
function appendNumber(num) {
    if (!isPowerOn) return;

    if (resetNext) {
        currentInput = "0";
        resetNext = false;
    }

    if (num === ".") {
        // 소수점은 한 번만 허용
        if (currentInput.includes(".")) return;
        currentInput += ".";
    } else if (currentInput === "0") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

// 연산자 입력
function appendOperator(op) {
    if (!isPowerOn) return;

    // 연산자를 연속으로 누르면 연산자만 교체
    if (operator && resetNext) {
        operator = op;
        return;
    }

    // 이미 연산자가 있으면 먼저 계산 (예: 1 + 2 + → 3)
    if (operator && previousValue !== null) {
        const result = calculate(previousValue, parseFloat(currentInput), operator);
        if (result === null) return;
        currentInput = String(result);
        updateDisplay();
    }

    previousValue = parseFloat(currentInput);
    operator = op;
    resetNext = true;
}

// Enter 버튼: 계산 실행
function performCalculate() {
    if (!isPowerOn) return;
    if (operator === null || previousValue === null) return;

    const result = calculate(previousValue, parseFloat(currentInput), operator);
    if (result === null) return;

    currentInput = String(result);
    updateDisplay();

    previousValue = null;
    operator = null;
    resetNext = true;
}

// 실제 사칙연산
function calculate(a, b, op) {
    let result;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                getDisplay().value = "Error";
                resetState();
                resetNext = true;
                return null;
            }
            result = a / b;
            break;
        default:
            return null;
    }
    // 부동소수점 오차 보정 (예: 0.1 + 0.2 → 0.3)
    return parseFloat(result.toFixed(10));
}