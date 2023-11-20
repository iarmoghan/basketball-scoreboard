let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let countHome = 0;
let countGuest = 0;
function add1OnHome(){
    countHome += 1
    homeEl.textContent  = countHome
}
function add2OnHome(){
    countHome += 2
    homeEl.textContent  = countHome
}
function add3OnHome(){
    countHome += 3
    homeEl.textContent  = countHome
}
function add1OnGuest(){
    countGuest += 1
    guestEl.textContent = countGuest 
}
function add2OnGuest(){
    countGuest += 2
    guestEl.textContent = countGuest
}
function add3OnGuest(){
    countGuest += 3
    guestEl.textContent = countGuest
}