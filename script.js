const heading = document.getElementById("heading");
const message = document.getElementById("message");
const btn = document.getElementById("changeBtn");

const messages = [
  "You clicked the button!",
  "JavaScript is working.",
  "Have a great day!",
];

let index = 0;

btn.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  message.textContent = messages[index];
  heading.textContent = `Message ${index + 1}`;
});
