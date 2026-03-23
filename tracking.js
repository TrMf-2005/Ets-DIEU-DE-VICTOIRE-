// tracking.js
const site = "mon-premier-site"; 

fetch("https://ton-backend.onrender.com/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        site: site,
        page: window.location.href,
        date: new Date().toLocaleString(),
        navigateur: navigator.userAgent
    })
});