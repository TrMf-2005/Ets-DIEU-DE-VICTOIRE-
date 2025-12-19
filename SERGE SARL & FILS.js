// Menu Mobile
    let menuBtn = document.getElementById("menuBtn");
    let menu = document.getElementById("menu");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        menu.style.display = menuOpen ? "none" : "flex";
        menuOpen = !menuOpen;
    });

    // Panier
    let total = 0;
    let cartTotal = document.getElementById("cartTotal");
    let cartTotal2 = document.getElementById("cartTotal2");
    let cartItems = document.getElementById("cartItems");
    let cartPanel = document.getElementById("cartPanel");
    let cartButton = document.getElementById("cartButton");
    let cartOpen = false;

    function updateTotals(){
        cartTotal.textContent = total.toLocaleString();
        cartTotal2.textContent = total.toLocaleString();
    }

    function addToCart(name, price){
        total += price;
        updateTotals();

        let item = document.createElement("div");
        item.className = "cart-item";
        item.innerHTML = `${name} - ${price.toLocaleString()} FCFA 
        <button onclick="removeItem(this, ${price})">X</button>`;
        cartItems.appendChild(item);
    }

    function removeItem(button, price){
        button.parentElement.remove();
        total -= price;
        if(total <0) total=0;
        updateTotals();
    }

    function toggleCart(){
        cartOpen = !cartOpen;
        if(cartOpen) cartPanel.classList.add("open");
        else cartPanel.classList.remove("open");
    }

    cartButton.addEventListener("click", toggleCart);
    function openCart(){ toggleCart(); }





















// ===================== WHATSAPP PRODUIT =====================
function sendProductWhatsapp(action, name, price){
    let phone = "22996540120"; // 🔴 Numéro de Mr S

    let message =
`Bonjour Ets DIEU DE VICTOIRE 👋

Je souhaite ${action} l'article suivant :

🛒 Produit : ${name}
💰 Prix : ${price.toLocaleString()} FCFA

Merci 😊`;

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );
}

// ===================== WHATSAPP PANIER =====================
function sendCartWhatsapp(){
    if(cartItems.children.length === 0){
        alert("Votre panier est vide !");
        return;
    }

    let phone = "22996540120";
    let list = "";
    let items = cartItems.querySelectorAll(".cart-item");

    items.forEach((item, index) => {
        list += `${index+1}. ${item.textContent.replace("X","").trim()}\n`;
    });

    let message =
`Bonjour Ets DIEU DE VICTOIRE 👋

Je souhaite commander les articles suivants :

${list}

💰 Total : ${total.toLocaleString()} FCFA

Merci 😊`;

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );
}

