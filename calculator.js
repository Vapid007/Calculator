function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = '';
}

function calculate() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendValue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearResult();
    }
});