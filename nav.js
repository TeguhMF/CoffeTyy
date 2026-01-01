// Navbar untuk semua halaman
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        navbar.innerHTML = `
            <div class="container mx-auto px-4 py-4">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-coffee-500 rounded-full flex items-center justify-center">
                            <i class="fas fa-coffee text-white text-xl"></i>
                        </div>
                        <span class="text-2xl font-serif font-bold">CoffeeTyy</span>
                    </a>
                    
                    <!-- Menu untuk desktop -->
                    <div class="hidden md:flex space-x-8">
                        <a href="index.html" class="hover:text-coffee-200 transition duration-300 ${window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/') ? 'text-coffee-200 font-bold' : ''}">
                            <i class="fas fa-home mr-2"></i> Home
                        </a>
                        <a href="menu.html" class="hover:text-coffee-200 transition duration-300 ${window.location.pathname.includes('menu.html') ? 'text-coffee-200 font-bold' : ''}">
                            <i class="fas fa-mug-hot mr-2"></i> Menu
                        </a>
                        <a href="about.html" class="hover:text-coffee-200 transition duration-300 ${window.location.pathname.includes('about.html') ? 'text-coffee-200 font-bold' : ''}">
                            <i class="fas fa-info-circle mr-2"></i> About
                        </a>
                    </div>
                    
                    <!-- Tombol Pesan via WhatsApp -->
                    <a href="https://wa.me/62895614396565?text=Halo%20coffeeTyy,%20saya%20ingin%20pesan%20kopi" 
                       target="_blank"
                       class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 transform hover:scale-105">
                        <i class="fab fa-whatsapp mr-2"></i> Pesan via WA
                    </a>
                    
                    <!-- Hamburger menu untuk mobile -->
                    <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
                
                <!-- Menu untuk mobile -->
                <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-4 pb-4">
                    <a href="index.html" class="block hover:text-coffee-200 transition duration-300 ${window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/') ? 'text-coffee-200 font-bold' : ''}">
                        <i class="fas fa-home mr-2"></i> Home
                    </a>
                    <a href="menu.html" class="block hover:text-coffee-200 transition duration-300 ${window.location.pathname.includes('menu.html') ? 'text-coffee-200 font-bold' : ''}">
                        <i class="fas fa-mug-hot mr-2"></i> Menu
                    </a>
                    <a href="about.html" class="block hover:text-coffee-200 transition duration-300 ${window.location.pathname.includes('about.html') ? 'text-coffee-200 font-bold' : ''}">
                        <i class="fas fa-info-circle mr-2"></i> About
                    </a>
                    <a href="https://wa.me/62895614396565?text=Halo%20coffeeTyy,%20saya%20ingin%20pesan%20kopi" 
                       target="_blank"
                       class="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full text-center transition duration-300">
                        <i class="fab fa-whatsapp mr-2"></i> Pesan via WA
                    </a>
                </div>
            </div>
        `;
        
        // Tambahkan event listener untuk toggle mobile menu
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                // Toggle ikon hamburger
                const icon = mobileMenuButton.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }
});