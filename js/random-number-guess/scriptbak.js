const ptsSpan = document.querySelector("#pts")
const startBtn = document.querySelector("#start")
const game = document.querySelector("#game")
const gameButtons = document.querySelectorAll(".game-btn")

let pts = 0;

startBtn.onclick = () => {
    game.classList.remove("hidden")

    const guessedNumber = Math.floor(Math.random() * 100)
    console.log(guessedNumber)

    const correctButtonIndex = Math.floor(Math.random() * 3)

    gameButtons.forEach((gameBtn, index) => {
        if(index === correctButtonIndex) {
            gameBtn.textContent = guessedNumber

            gameBtn.onclick = () => {
                window.alert("Correct answer!")
                game.classList.add("hidden")
                pts+=1
                ptsSpan.textContent = pts
                gameBtn.onclick = () => {}
            }      
            
        }else {
            gameBtn.textContent = Math.floor(Math.random() * 100)
        }
    })
}

