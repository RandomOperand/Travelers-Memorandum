// Get toggle button
const toggleButton = document.getElementById("theme-toggle");

// Check if the user has a saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode when button is clicked
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.removeItem("theme");
    }
});
