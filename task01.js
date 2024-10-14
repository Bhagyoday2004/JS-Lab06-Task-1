let counter = 0;

document.getElementById("incrementButton").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").textContent = counter;
});
