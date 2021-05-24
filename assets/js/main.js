/* 
//Round:
1. zuerst werden die gewünschte Anzahl der Runden ausgewählt, beim Klick auf Stein, Schere oder Papier ändert sich die 
    Ansicht - also radio buttons verschwinden und es erscheint die zu spielende Einheit 
2.  (links 1/ rechts Gesamtzahl an Runden) 
    = function, wenn Radio ausgewählt + Button (Stein...) ausgewählt dann id radio auf display none 
    Ansicht von Runden: (wieviele Klicks unten gemacht worden sind) / totalrounds (wert der bei Radio ausgewählt wurde)

//win:
1. wenn User win, dann ++ bei linken Punktestand
2. wenn Comp win, dann ++ bei rechten Punktestand

//Play(Anzeige Let´s Play, Runde, ob gewonnen oder nicht, finaler Stand bzw. gewonnen oder verloren?):
1. verschiedene Anzeigen:
    1. Let's play (start)
    2. pro Runde -(welches icon gewinnt? Ausgabe Gewinner) beats (welches icon verliert? Ausgabe Verlierer).  You win or lose!
    3. It was a draw! You both chose Paper! (Ausgabe wenn user und comp dasselbe icon gewählt haben)
    4. The user or comp wins! ( wird nach der letzten Runde direkt ausgegeben

//Icons
1. wenn drauf geklickt, dann generiert der Comp einfach durch Zufall (Stein Schere oder Papier), dann wird einfach nach mit math

wenn user auswählt dann wird per Zufallsprinzig vom Computer ausgewählt
Möglichkeiten des Spiels:
Randomzahl 1 2 3 für
-> Stein schlägt Schere
-> Papier schlägt Stein
-> Schere schlägt Papier
-> Stein , Stein gleich unentschieden 
-> Papier , Papier gleich unentschieden
-> Schere , Schere gleich unentschieden
 ==> (if) wenn links die Zahl größer ist, dann gewonnen ..... else dann verloren
        else if wenn beide gleich dann unentschieden

//Reset
-> setzt alles auf null zurück

Nach Auswahl der Runden und dem ersten Klick auf den Icon wird sofort die Erste Runde gespielt
-> oben werden die Runden sofort hoch gezählt
-> und der Score wird dementsprechend gezählt
-> direkt nach der letzten Runde wird der Gewinner ausgegeben
Nach Ende wird auf Restart gedrückt
*/

let round = document.getElementById("round")

// Radio buttons
let radioOne = document.getElementById("round5")
let radioTwo = document.getElementById("round10")
let radioThree = document.getElementById("round15")
let radioFour = document.getElementById("round20")
// Buttons rock paper scissors
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
// display block, display none
let radio = document.getElementById("radio")
let radioHide = document.getElementById("radio-hide")
// radio hide // actual and max Rounds
let actualRound = 0
let maxRound = 0 
let actualRound_span = document.getElementById("actual-round")
let maxRound_span = document.getElementById("max-round")
// score
let userScore = 0
let compScore = 0
let userScore_div = document.getElementById("user")
let compScore_div = document.getElementById("comp")
/* Score board??? */
let result_h1 = document.getElementById("play")

function icon() {
    actualRound++
    actualRound_span.innerHTML = actualRound
    userScore
    compScore
    if (radioOne.checked) {
        maxRound = 5
        radio.style.display = "none"
        radioHide.style.display = "block"
        maxRound_span.innerHTML = maxRound
       /*  if (actualRound >= 5 && compScore >= userScore) {
            result_h1.innerHTML = `You lose. Try again. 😉`
            return actualRound = 4 
        } else if (actualRound >= 5 && compScore <= userScore) {
            result_h1.innerHTML = `You win. 🎉`
            return actualRound = 4
        } else if (actualRound == 5 && compScore == userScore) {
            result_h1.innerHTML = `It´s a draw. 💩`
            return actualRound = 4
          } */
          if (actualRound >= 5) {
              if (compScore >= userScore) {
                result_h1.innerHTML = `You lose. Try again. 😉`
                return compScore
              } else if (compScore <= userScore) {
                result_h1.innerHTML = `You win. 🎉` 
              } else if (compScore == userScore) {
                result_h1.innerHTML = `It's a draw. 💩`
              }
              return actualRound = 4 
          }
    } else if (radioTwo.checked) {
        maxRound = 10
        radio.style.display = "none"
        radioHide.style.display = "block"
        maxRound_span.innerHTML = maxRound
        if (actualRound >= 10 && compScore >= userScore) {
          result_h1.innerHTML = `You lose. Try again. 😉`
          return actualRound = 9
      } else if (actualRound >= 10 && compScore <= userScore) {
          result_h1.innerHTML = `You win. 🎉`
          return actualRound = 9
      } else if (actualRound == 10 && compScore == userScore) {
          result_h1.innerHTML = `It´s a draw. 💩`
          return actualRound = 9
      }
    } else if (radioThree.checked) {
        maxRound = 15
        radio.style.display = "none"
        radioHide.style.display = "block"
        maxRound_span.innerHTML = maxRound
        if (actualRound >= 15 && compScore >= userScore) {
          result_h1.innerHTML = `You lose. Try again. 😉`
          return actualRound = 14
      } else if (actualRound >= 15 && compScore <= userScore) {
          result_h1.innerHTML = `You win. 🎉`
          return actualRound = 14
      } else if (actualRound >= 15 && compScore == userScore) {
          result_h1.innerHTML = `It´s a draw. 💩`
          return actualRound = 14
      }
    } else if (radioFour.checked) {
        maxRound = 20
        radio.style.display = "none"
        radioHide.style.display = "block"
        maxRound_span.innerHTML = maxRound
        if (actualRound >= 20 && compScore >= userScore) {
          result_h1.innerHTML = `You lose. Try again. 😉`
          return actualRound = 19
      } else if (actualRound >= 20 && compScore <= userScore) {
          result_h1.innerHTML = `You win. 🎉`
          return actualRound = 19
      } else if (actualRound >= 20 && compScore == userScore) {
          result_h1.innerHTML = `It´s a draw. 💩`
          return actualRound = 19
      }
    } 
}

// Funktionen zum Spiel/ play
rock.addEventListener('click', () => play("rock")) 
paper.addEventListener('click', () => play("paper"))
scissors.addEventListener('click', () => play("scissors"))

// Computer Choice
function computerChoice() {
  let choices = ['rock', 'paper', 'scissors']
  let randomNum = Math.floor(Math.random() *3)
  return choices[randomNum]
}
// Funktionen für win, lose, draw
function win(userChoice, compChoice) {
    const userWsmall = "user".fontsize(3).sup()
    const compWsmall = "comp".fontsize(3).sup()
    const userChoice_img = document.getElementById(userChoice)
    userScore++
    userScore_div.innerHTML = userScore
    compScore_div.innerHTML = compScore
    result_h1.innerHTML = `${userChoice}${userWsmall} beats ${compChoice}${compWsmall}. You win!`
    userChoice_img.classList.add('win')
    setTimeout(function() {userChoice_img.classList.remove('win')}, 300)
}
function lose(userChoice, compChoice) {
    const userWsmall = "user".fontsize(3).sup()
    const compWsmall = "comp".fontsize(3).sup()
    const userChoice_img = document.getElementById(userChoice)
    compScore++
    userScore_div.innerHTML = userScore
    compScore_div.innerHTML = compScore
    result_h1.innerHTML = ` ${compChoice}${compWsmall} beats ${userChoice}${userWsmall}. You lose!`
    userChoice_img.classList.add('lose')
    setTimeout(function() {userChoice_img.classList.remove('lose')}, 300)
}
function draw(userChoice) {
      const userChoice_img = document.getElementById(userChoice)
      result_h1.innerHTML = `It was a draw! You both chose ${userChoice}!`
      userChoice_img.classList.add('draw')
      setTimeout(function() {userChoice_img.classList.remove('draw')}, 300)
}
// Spielregeln
function play(userChoice) {
  const compChoice = computerChoice()
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice)
      break
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice)
      break
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, compChoice)
      break
}
}
// restart Button
function restart() {
    location.reload()
}