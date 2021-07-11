let dataBalance = 0;
let networkConnections = 0;

function mineData(number) {
    dataBalance += number;
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

function networkConnectionsWork(){
    if (networkConnections > 0){
        dataBalance += 1 * networkConnections;
        document.getElementById("dataBalance").innerHTML = dataBalance;
    }
}

setInterval("networkConnectionsWork()", 1000)