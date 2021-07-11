let dataBalance = 0;
let networkConnections = 0;
let clickFactor = 1;

function mineData(number) {
    dataBalance += number * clickFactor;
    document.getElementById("dataBalance").innerHTML = dataBalance;
}

function buyNetworkConnections() {
    let networkConnectionsCost = 40 + Math.floor((Math.pow(1.1, networkConnections)));
    if (dataBalance >= networkConnectionsCost) {
        networkConnections++;
        dataBalance -= networkConnectionsCost;
        document.getElementById("networkConnections").innerHTML = networkConnections;
        document.getElementById("dataBalance").innerHTML = dataBalance;
    }
}

function buyClickFactor(){
    let clickFactorCost = 100 + Math.floor((Math.pow(1.1, clickFactor)));
    if (dataBalance >= clickFactorCost){
        clickFactor++;
        dataBalance -= clickFactorCost;
        document.getElementById("clickFactor").innerHTML = clickFactor;
        document.getElementById("dataBalance").innerHTML = dataBalance;
    }
}

function networkConnectionsWork(){
    if (networkConnections > 0){
        dataBalance += 1 * networkConnections;
        document.getElementById("dataBalance").innerHTML = dataBalance;
    }
}

setInterval("networkConnectionsWork()", 1000)