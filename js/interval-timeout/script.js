const button = document.querySelector("#calculate");
const backBtn = document.querySelector("#back");
const forwardBtn = document.querySelector("#forward");
const timeout = document.querySelector("p");

// let intervalId;

// const createMessage = (seconds) => {
//   return `Calculating... ${seconds} seconds remaining`;
// };

// const createSizes = () => {
//   return `Window size: ${window.innerWidth} x ${window.innerHeight}`;
// };

// button.addEventListener("click", () => {
//   button.disabled = true;
//   let count = 3;

//   timeout.textContent = createMessage(count);

//   intervalId = setInterval(() => {
//     count--;
//     if (count > 0) {
//       timeout.textContent = createMessage(count);
//     } else {
//       clearInterval(intervalId);
//       timeout.textContent = `Calculation complete. ${createSizes()}. (Click button to calculate again)`;
//       button.disabled = false;
//     }
//   }, 1000);
// });

backBtn.addEventListener("click", () => {
  console.log(window.history);
  if (window.history.length > 1) {
    window.history.back();
  } else {
    alert("No previous page in history.");
  }
});

forwardBtn.addEventListener("click", () => {
  console.log(window.history);
  if (window.history.length > 1) {
    window.history.forward();
  } else {
    alert("No next page in history.");
  }
});

const changeTimeoutCount = (count) => {
  timeout.innerHTML = `Calculating... ${count} seconds remaining.`
}

button.addEventListener('click', () => {
  let count = 3;
  changeTimeoutCount(count)
  button.disabled = true;

  const intervalId =  setInterval(() => {
    count -= 1;
    changeTimeoutCount(count)
    if (count == 0){
      clearInterval(intervalId)
      timeout.innerHTML = `Calculation completed. Window size: ${window.innerWidth} x ${window.innerHeight}`
      button.disabled = false;
    }
  }, 1000)
})