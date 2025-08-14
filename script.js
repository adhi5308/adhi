function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.querySelector("main").classList.toggle("shift");
}

// Active link highlighting
document.querySelectorAll('#sidebar nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('#sidebar nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Register/Login logic with localStorage
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-container form");
    const usernameInput = form.querySelector("input[type='text']");
    const passwordInput = form.querySelector("input[type='password']");
    const loginBtn = form.querySelector("button[type='submit']");
    const registerBtn = form.querySelector("button[type='button']");

    // Register user
    registerBtn.addEventListener("click", function() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        if (users.some(u => u.username === username)) {
            alert("Username already exists!");
            return;
        }

        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully! Please login.");
    });

    // Login user
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();

        let user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            window.location.href = "product.html";
        } else {
            alert("Invalid username or password");
        }
    });
});

function logoutUser() {
    if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "index.html";
    }
}

// Optional: If no user is logged in, redirect to login page
if (!localStorage.getItem("loggedInUser")) {
    // If you want to force login before using index page:
    // window.location.href = "login.html";  // Or wherever your login form is
}

if (localStorage.getItem("loggedInUser")) {
    document.querySelector(".form-container").style.display = "none";
}


function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// Check login status
document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let sidebar = document.getElementById("sidebar");
    let formContainer = document.querySelector(".form-container");

    if (loggedInUser) {
        // Show sidebar, hide login form
        sidebar.style.display = "block";
        if (formContainer) formContainer.style.display = "none";
    } else {
        // Hide sidebar, show login form
        sidebar.style.display = "none";
        if (formContainer) formContainer.style.display = "block";
    }
});

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function () {
    if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "index.html";
    }
});

