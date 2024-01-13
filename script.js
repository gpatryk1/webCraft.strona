document.addEventListener("DOMContentLoaded", function() {
    var obrazek = document.getElementById("wysuwanyObrazek");
    
    setTimeout(function() {
        obrazek.style.opacity = "1";
        obrazek.style.left = "50%";
    }, 1000); // 1000ms = 1s, możesz dostosować ten czas według potrzeb
});