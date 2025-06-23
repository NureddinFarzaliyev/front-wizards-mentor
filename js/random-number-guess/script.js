const startBtn = document.querySelector("#start")
const game = document.getElementById("game")
const gameBtns = document.querySelectorAll(".game-btn")
const ptsSpan = document.getElementById("pts")

let pts = 0;

startBtn.onclick = () => {
    // Oyunu aktivləşdir
    game.classList.remove("hidden")

    // Düymələrə random ədədlər əlavə et
    gameBtns.forEach(button => {
        const randomNumber = Math.round(Math.random() * 100)
        button.textContent = randomNumber
    })

    // Doğru düymənin indexi
    const correctIndex = Math.round(Math.random() * 2) // 0-2

    gameBtns.forEach((button, index) => {
        if (index === correctIndex) {
            // Doğru düyməyə klikləndikdə
            button.onclick = () => {
                window.alert("CORRECT")

                // Xalı 1 vahid artır
                pts++

                // pts-i spanin daxilinə yerləşdir
                ptsSpan.textContent = pts

                // oyunu gizlət
                game.classList.add("hidden")

                // bütün düymələri sıfırla
                gameBtns.forEach(gmBtn => gmBtn.onclick = () => {})
            }
        } else {
            // Yanlış düyməyə klikləndikdə
            button.onclick = () => {
                window.alert("WRONG")
                pts--
                ptsSpan.innerHTML = pts
            }
        }
    })
}
