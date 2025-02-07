
        
               function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: "Check out Anurag's Links",
            text: "Here are my social media and project links!",
            url: window.location.href
        }).then(() => {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
        alert("Your browser does not support sharing.");
    }
}

        // Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in local storage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerText = "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerText = "🌙 Dark Mode";
    }
});

// Copy Link Function
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}

// Share Button Function
function shareProfile() {
    alert("Share feature coming soon!");
}
 
   