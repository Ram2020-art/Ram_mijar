document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("popup");

  setTimeout(function() {
    popup.style.display = "none";
  }, 4000); // 4 seconds

  popup.style.display = "block";
});
