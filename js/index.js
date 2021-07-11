let dataBalance = 0;

function mineData(number) {
    dataBalance += number;
    document.getElementById("dataBalance").innerHTML = dataBalance;
}