function findX(parameter1, parameter2) {
    return -parameter2 / parameter1;
}
function printX() {
    const numA = document.getElementById("numa");
    const numB = document.getElementById("numb");
    const a = numA.value;
    const b = numB.value;
    const pResult = document.getElementById("result");
    pResult.textContent = "x = " + findX(a, b);
}
const btnSolve = document.getElementById("solve");
btnSolve.onclick = printX;