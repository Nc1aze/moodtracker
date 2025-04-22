const moodButtons = document.querySelectorAll(".mood");
const body = document.body;
const moodHistory = document.getElementById("mood-history");
const toggleThemeBtn = document.getElementById("toggle-theme");

const moodColors = {
  happy: "var(--happy)",
  sad: "var(--sad)",
  excited: "var(--excited)",
  calm: "var(--calm)"
};

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--${mood}`);
    
    // Add to mood history
    const entry = document.createElement("li");
    entry.textContent = `${new Date().toLocaleTimeString()} - ${button.textContent}`;
    moodHistory.prepend(entry);
  });
});

// Dark mode toggle
toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
