localStorage.setItem("score", 0)
for (var i = 0; i < 5; i++) {
    localStorage.setItem(`prize_${i}`, "false")
}
localStorage.setItem("gaveUp", "false")
window.location.replace("game.html")