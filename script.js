// Dark Mode
document.getElementById("darkBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll Animation
let elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Form Validation
document.getElementById("form").onsubmit = function(e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Fill required fields!");
    e.preventDefault();
  } else {
    alert("Message Sent!");
  }
};