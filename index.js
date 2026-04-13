sessionStorage.setItem("score", 0)
for (var i = 0; i < 5; i++) {
    sessionStorage.setItem(`prize_${i}`, "false")
}
sessionStorage.setItem("gaveUp", "false")
window.location.replace("game.html")