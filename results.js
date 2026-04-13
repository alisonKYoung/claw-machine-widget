// Declaring variables that select elements on the HTML page so that we can interact with the using code
var playAgain_el = document.querySelector("#play-again")
var giveup = document.querySelector("#give-up")
var window_el = document.querySelector("#result-window")
var result_img_el = document.querySelector("#result-image")
var collection_el = document.querySelector("#show-collected")

// Pulls the winning result information from the previous page to this one
var result = sessionStorage.getItem("result")
var score = sessionStorage.getItem("score")
var gaveUp = false

// this function tells the page to load up with the winning result
function loadPage() {
    window_el.style.opacity = "1"
    window_el.style.transform = "translateY(0px)"
    giveup.style.opacity = "1"
    playAgain_el.style.opacity = "1"
    collection_el.opacity = "1"
    result_img_el.src = `Assets/preview_imgs/preview${result}.png`
}

// this actually calls that loading function
loadPage();

giveup.addEventListener("click", () => {
    playAgain_el.textContent = score + " TRIES"
    gaveUp = true;
    sessionStorage.setItem("gaveUp", "true")
})

// this tells the website to go back to the game page if the user hits the play again button
playAgain_el.addEventListener("click", ()=> {
    if (!gaveUp) {
        window.location.replace("game.html");
        window_el.style.opacity = "0"
        window_el.style.transform = "translateY(10px)"
        giveup.style.opacity = "0"
        playAgain_el.style.opacity = "0"
    }
})

collection_el.addEventListener("click", () => {
    window.location.replace("collected.html");
    window_el.style.opacity = "0"
    window_el.style.transform = "translateY(10px)"
    giveup.style.opacity = "0"
    playAgain_el.style.opacity = "0"
})