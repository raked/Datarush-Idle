let dataBalance = 0;
let networkConnections = 0;
let clickFactor = 1;
let clickCombo = 1;
let enemyCounter = 0;

function mineData(number) {
    clickCombo += .5;
    let clickComboDisplay = clickCombo.toFixed(2);
    dataBalance += number * clickFactor * clickCombo;
    dataBalanceDisplay = dataBalance.toFixed(2);
    document.getElementById("dataBalance").innerHTML = dataBalanceDisplay;
    document.getElementById("clickCombo").innerHTML = clickComboDisplay;
}

function clickComboDecay(){
    if (clickCombo > 1){
        clickCombo -= .25;
        let clickComboDisplay = clickCombo.toFixed(2);
        document.getElementById("clickCombo").innerHTML = clickComboDisplay;
    }
}

setInterval("clickComboDecay()", 1000);

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


function randomReward(){
    let bodyDiv = document.body;
    let newDivName = "randomReward" + enemyCounter;
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", newDivName);
    parentDiv.setAttribute("class", "randomReward");
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let imgElem = document.createElement("img");
    bodyDiv.appendChild(parentDiv);
    let rewardButton = document.createElement("button");
    rewardButton.setAttribute("class", "rewardButton");
    parentDiv.appendChild(rewardButton);
    imgElem.src = "assets/images/spider_from_datarush.png";
    determiningNumber = Math.random();
    if(determiningNumber < 0.001){
        rewardButton.appendChild(imgElem);

        let randomTop = getRandomNumber(0, winHeight - 125);
        let randomLeft = getRandomNumber(0, winWidth - 125);

        parentDiv.style.top = randomTop + "px";
        parentDiv.style.left = randomLeft + "px";

        enemyCounter++;
    }
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval("randomReward()", 1000);

setInterval("networkConnectionsWork()", 1000);