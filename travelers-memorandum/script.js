const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
    // Check if the user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "🌙"; // Set to "Light" icon when dark mode is active
    }

    // When the button is clicked, toggle between light and dark modes
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "🌙"; // Change button to "Light" icon
        } else {
            localStorage.removeItem("theme");
            toggleButton.textContent = "🌕"; // Change button to "Dark" icon
        }
    });
} else {
    console.error("Theme toggle button not found");
}
