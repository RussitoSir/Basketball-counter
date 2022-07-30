let containerHomeScore = document.getElementById("container-home-score")
let containerGuestScore = document.getElementById("container-guest-score")
let homeScore = 0
let guestScore = 0
newGame()

function hplus1() {
  homeScore += 1
  containerHomeScore.textContent = homeScore
}
function hplus2() {
  homeScore += 2
  containerHomeScore.textContent = homeScore
}
function hplus3() {
  homeScore += 3
  containerHomeScore.textContent = homeScore
}
function gplus1() {
  guestScore += 1
  containerGuestScore.textContent = guestScore
}
function gplus2() {
  guestScore += 2
  containerGuestScore.textContent = guestScore
}
function gplus3() {
  guestScore += 3
  containerGuestScore.textContent = guestScore
}


function newGame() {
    guestScore = 0
    homeScore = 0
    containerGuestScore.textContent = guestScore
    containerHomeScore.textContent = homeScore
}
