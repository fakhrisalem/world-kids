
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            const slides = document.querySelectorAll('.carousel-slide');
            const prevBtn = document.getElementById('carousel-prev');
            const nextBtn = document.getElementById('carousel-next');
            let currentSlide = 0;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('opacity-100', i === index);
                    slide.classList.toggle('opacity-0', i !== index);
                });
            }

            if(nextBtn && prevBtn) {
                nextBtn.addEventListener('click', () => {
                    currentSlide = (currentSlide + 1) % slides.length;
                    showSlide(currentSlide);
                });

                prevBtn.addEventListener('click', () => {
                    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                    showSlide(currentSlide);
                });

                 setInterval(() => {
                    nextBtn.click();
                }, 5000);
            }
            updateCartCounter();
        });

        function addToCart(product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            showToast(product.name);
            updateCartCounter();
        }

        function showToast(productName) {
            const toast = document.getElementById('toast-notification');
            toast.textContent = `"${productName}" added to cart!`;
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                toast.classList.remove('translate-y-0', 'opacity-100');
            }, 3000);
        }

        function updateCartCounter() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cart.length;
            
            const counterDesktop = document.getElementById('cart-counter-desktop');
            const mobileCartText = document.getElementById('mobile-cart-text');
            const mobileIconSpan = document.querySelector('#mobile-menu .fa-shopping-cart + span');

            if (totalItems > 0) {
                counterDesktop.textContent = totalItems;
                counterDesktop.classList.remove('hidden');
                if (mobileCartText) mobileCartText.textContent = `Cart (${totalItems})`;
                
            } else {
                counterDesktop.classList.add('hidden');
                if (mobileCartText) mobileCartText.textContent = 'Cart';
            }
        }
  
