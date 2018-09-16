function rollDice() {
	var numSides = 6;
	return Math.floor(Math.random() * numSides) + 1;
}

function playGame(startingBet) {
	
	var currentMoney = startingBet;
	var totalRolls = 0;
	var highestAmount = currentMoney;
	var highestAmountRolls = 0;
	
	for (totalRolls = 0; currentMoney > 0; totalRolls++) {
		if (rollDice() + rollDice() == 7) {
			currentMoney += 4;
		} else {
			currentMoney -= 1;
		}
		if (currentMoney > highestAmount) {
			highestAmount = currentMoney;
			highestAmountRolls = totalRolls;
		}
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("resultsTitle").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again";
	document.getElementById("startingResult").innerText = "$" + startingBet;
	document.getElementById("totalRollsResult").innerText = totalRolls;
	document.getElementById("highestResult").innerText = "$" + highestAmount;
	document.getElementById("highestRollCountResult").innerText = highestAmountRolls;
	
	
}

function validateItems() {
	
	var startingBet = document.forms["game"]["startingBet"].value;
	if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
		alert("Starting Bet must be a number greater than 0.");
		document.forms["game"]["startingBet"].parentElement.className = "form-group has-error";
		document.forms["game"]["startingBet"].focus();
		return false;
	}
	
	startingBet = Number(startingBet);
	playGame(startingBet);
	
	return false;
	
}