var outcomeElem = document.getElementById('outcome')
var playCountElem = document.getElementById('play-count')
var winsCountElem = document.getElementById('wins')
var lossesCountElem = document.getElementById('losses')
var tiesCountsElem = document.getElementById('ties')
var playCount = 0
var winCount = 0
var lossCount = 0
var tieCount = 0


function play(choice) {
    playCount++
    playCountElem.textContent = playCount
    var choices = ["rock", "paper", "scissors"]
    var compChoice = choices[Math.floor(Math.random() * 3)]
    console.log("playerChoice: ", choice, "compChoice: ", compChoice)
    if (choice == compChoice) {
        tieCount++
        tiesCountsElem.textContent = tieCount
        return outcomeElem.textContent = 'Tie!'
    }

    if (compChoice == 'rock') {
        if (choice == 'scissors') {
            lossCount++
            lossesCountElem.textContent = lossCount
            return outcomeElem.textContent = 'Computer Wins!'
        } else {
            winCount++
            winsCountElem.textContent = winCount
            return outcomeElem.textContent = 'You Win!'
        }
    }

    if (compChoice == 'paper') {
        if (choice == 'rock') {
            lossCount++
            lossesCountElem.textContent = lossCount
            return outcomeElem.textContent = 'Computer Wins!'
        } else {
            winCount++
            winsCountElem.textContent = winCount
            return outcomeElem.textContent = 'You Win!'
        }
    }


    if (choice == 'paper') {
        lossCount++
        lossesCountElem.textContent = lossCount
        return outcomeElem.textContent = 'Computer Wins!'
    } else {
        winCount++
        winsCountElem.textContent = winCount
        return outcomeElem.textContent = 'You Win!'
    }
}




