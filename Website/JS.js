document.getElementById("btnClick").addEventListener("click", function() {

  // Show alert
  alert("Hello! Welcome to my website 😊");

  // Change button text after click
  this.innerText = "Clicked! 🎉";

  // Change button color
  this.style.backgroundColor = "#ff5722";

});