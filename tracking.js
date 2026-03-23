const site = window.location.hostname; // détecte automatiquement le nom de ton site

fetch("https://ton-backend.onrender.com/track", { // remplace par ton URL Render
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        site: site,
        page: window.location.href,
        date: new Date().toLocaleString(),
        navigateur: navigator.userAgent
    })
});
