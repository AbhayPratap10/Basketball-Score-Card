let homeScoreEl=document.getElementById("home-score")
let guestScoreEl=document.getElementById("guest-score")
let guestScore=0
let homeScore=0
function plusOneHome(){
    homeScore+=1
    homeScoreEl.textContent=homeScore
}
function plusOneGuest(){
    guestScore+=1
    guestScoreEl.textContent=guestScore
}
function plusTwoHome(){
    homeScore+=2
    homeScoreEl.textContent=homeScore
}
function plusTwoGuest(){
    guestScore+=2
    guestScoreEl.textContent=guestScore
}
function plusThreeHome(){
    homeScore+=3
    homeScoreEl.textContent=homeScore
}
function plusThreeGuest(){
    guestScore+=3
    guestScoreEl.textContent=guestScore
}
function reset(){
    homeScoreEl.textContent=0
    guestScoreEl.textContent=0
}

