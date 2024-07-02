function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }


    let buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let bookTitle = this.previousElementSibling.textContent;
            addToCart(bookTitle);
        });
    });
});


function addToCart(bookTitle) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(bookTitle);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(bookTitle + ' se ha agregado al carrito.');
}


let darkModeButton = document.getElementById('toggle-dark-mode');
darkModeButton.addEventListener('click', toggleDarkMode);