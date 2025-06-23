const darkBtn = document.getElementById("mode-btn");
const body = document.body;

console.log(darkBtn);

darkBtn.onclick = () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    darkBtn.textContent = "Switch to Light Mode";
  } else {
    darkBtn.textContent = "Switch to Dark Mode";
  }
};
