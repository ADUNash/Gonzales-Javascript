// Act 1 - console.log
console.log("Hello World");
document.getElementById("act1-out").textContent = 'console.log("Hello World") executed! Open DevTools (F12) → Console to see it.';

// Act 2 - getElementById
document.getElementById("act2-out").innerHTML = 'document.getElementById() says: <strong style="color:#1a1a18">Hello from JavaScript!</strong>';

// Act 3 - External JS
document.getElementById("act3-out").textContent = "This text was loaded from an external scripts.js file!";

// Act 4 - Hoisting
x = 5;
var x;
document.getElementById("act4-out").textContent = "x = " + x + "  →  var x declared after use. Hoisting moved it to the top!";

// Act 5 - let
let y = 20;
document.getElementById("act5-out").textContent = "let y = 20  →  Value of y: " + y;

// Act 7 - document.write (simulated)
document.getElementById("act7-out").textContent = "document.write(5 + 6)  →  Output: 11";

// Modal logic
function openModal(id) {
  document.getElementById("overlay").classList.add("active");
  document.getElementById(id).classList.add("active");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("active");
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("active"));
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
