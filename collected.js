var playAgain_el = document.querySelector("#play-again")
var giveup = document.querySelector("#give-up")
var window_el = document.querySelector("#collect-window")

function loadCollected() {
    for (var i = 0; i < 5; i++) {
        prize_el = document.getElementById(`prize_${i}`)
        if (JSON.parse(localStorage.getItem(`prize_${i}`))) {
            let string = prize_el.textContent
            let newStr = string.slice(0, -1) + " ☑"
            prize_el.textContent = newStr
        }
    }
    window_el.style.opacity = "1"
    window_el.style.transform = "translateY(0px)"
    giveup.style.opacity = "1"
    playAgain_el.style.opacity = "1"
    if (JSON.parse(localStorage.getItem("gaveUp"))) {
        playAgain_el.textContent = localStorage.getItem("score") + " TRIES"
    }
}

loadCollected()

giveup.addEventListener("click", () => {
    playAgain_el.textContent = localStorage.getItem("score") + " TRIES"
    gaveUp = true;
    localStorage.setItem("gaveUp", "true")
})

playAgain_el.addEventListener("click", ()=> {
    if (!JSON.parse(localStorage.getItem("gaveUp"))) {
        window.location.replace("game.html");
        window_el.style.opacity = "0"
        window_el.style.transform = "translateY(10px)"
        giveup.style.opacity = "0"
        playAgain_el.style.opacity = "0"
    }
})