function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

  
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url || product.url 
    });

    localStorage.setItem('cart', JSON.stringify(cart));
}
//

    document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelectorAll('.product');
        products.forEach((product, index) => {
            product.style.animationDelay = `${index * 0.1}s`; 
            product.classList.add('fadeIn'); 
        });
    });
    function filterProducts(section) {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const productSection = product.getAttribute('data-section');
            product.style.display = (section === productSection || section === undefined) ? 'block' : 'none';
        });
    }

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image_url
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
