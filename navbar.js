// Navbar Component
function renderNavbar() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        
        /* Tambahan: Pastikan body tidak scrolling horizontal */
        html, body { overflow-x: hidden; }
    `;
    document.head.appendChild(style);
    
    const navHTML = `
        <nav class="fixed top-0 w-full z-[100] md:glass md:border-white/10 md:backdrop-blur-md border-b border-gray-200 bg-white md:bg-transparent">
            
            <div class="relative w-full"> <div class="flex justify-between items-center px-4 md:px-8 lg:px-12 py-3 md:py-4 w-full h-fit relative z-[101]">
                    
                    <div class="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                        <img src="./assets/logo.jpg" alt="Logo" class="w-8 md:w-10 h-8 md:h-10 object-cover rounded-full shadow-sm flex-shrink-0" />
                        <span class="text-base sm:text-lg md:text-2xl font-black text-[#2B2B2B] tracking-tighter font-headline truncate leading-tight">
                            cafefotocopy
                        </span>
                    </div>

                    <div class="hidden md:flex items-center gap-6 lg:gap-8">
                        <a class="nav-link active text-sm" href="#menu">Menu</a>
                        <a class="nav-link text-sm" href="#experience">Experience</a>
                        <a class="nav-link text-sm" href="#gallery">Gallery</a>
                        <a class="nav-link text-sm" href="#contact">Contact</a>
                    </div>

                    <button class="hidden md:block gradient-accent text-white px-6 py-2.5 rounded-xl font-bold uppercase text-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ml-4 flex-shrink-0"
                        onclick="openWhatsApp()">
                        Order Now
                    </button>

                    <button id="mobile-menu-btn" class="md:hidden ml-auto p-2 text-[#2B2B2B] hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none active:scale-95 flex-shrink-0" aria-label="Toggle Menu">
                        <svg id="menu-icon" class="w-6 h-6 transition-all duration-300 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                            <path id="menu-path" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                
                <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 overflow-y-auto transition-all duration-500 ease-out shadow-lg z-[100]" style="max-height: 0;">
                    
                    <div class="flex flex-col p-4 sm:p-6 gap-2 animate-fadeIn w-full max-w-full box-border">
                        <a class="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold text-[#2B2B2B] hover:bg-gray-50 hover:text-secondary transition-all duration-200 active:scale-95 border border-transparent hover:border-gray-100 w-full" href="#menu">
                            <span>Menu</span>
                            <svg class="w-4 h-4 opacity-40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                        
                        <a class="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold text-[#2B2B2B] hover:bg-gray-50 hover:text-secondary transition-all duration-200 active:scale-95 border border-transparent hover:border-gray-100 w-full" href="#experience">
                            <span>Experience</span>
                            <svg class="w-4 h-4 opacity-40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                        
                        <a class="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold text-[#2B2B2B] hover:bg-gray-50 hover:text-secondary transition-all duration-200 active:scale-95 border border-transparent hover:border-gray-100 w-full" href="#gallery">
                            <span>Gallery</span>
                            <svg class="w-4 h-4 opacity-40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                        
                        <a class="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold text-[#2B2B2B] hover:bg-gray-50 hover:text-secondary transition-all duration-200 active:scale-95 border border-transparent hover:border-gray-100 w-full" href="#contact">
                            <span>Contact</span>
                            <svg class="w-4 h-4 opacity-40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                        
                        <button class="gradient-accent text-white mt-4 py-4 px-4 rounded-xl font-bold uppercase text-sm shadow-md active:scale-95 transition-all duration-200 w-full hover:shadow-xl box-border"
                            onclick="openWhatsApp(); event.stopPropagation();">
                            Order Now
                        </button>
                    </div>
                </div>
                
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    setupNavbarLogic();
}

function setupNavbarLogic() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const menuPath = document.getElementById('menu-path');
    let menuTimeout;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isHidden = menu.classList.contains('hidden');
        
        if (isHidden) {
            clearTimeout(menuTimeout);
            menu.classList.remove('hidden');
            menu.style.maxHeight = "0px";
            
            void menu.offsetHeight;
            
            setTimeout(() => {
                // Batasi max-height agar tidak lebih besar dari layar
                menu.style.maxHeight = "calc(100vh - 70px)"; 
            }, 10);
            
            menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            icon.style.transform = "rotate(90deg)";
        } else {
            closeMenu();
        }
    });

    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuTimeout = setTimeout(() => {
                closeMenu();
            }, 250); 
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('hidden')) {
            const clickedInsideMenu = e.target.closest('#mobile-menu');
            const clickedButton = e.target.closest('#mobile-menu-btn');
            
            if (!clickedInsideMenu && !clickedButton) {
                closeMenu();
            }
        }
    });

    function closeMenu() {
        clearTimeout(menuTimeout);
        menu.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
        menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        
        menuTimeout = setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    }
}

// Global helper untuk WhatsApp
function openWhatsApp() {
    const text = "Halo Admin cafefotocopy, saya ingin info lebih lanjut.";
    window.open(`https://wa.me/6281226386095?text=${encodeURIComponent(text)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', renderNavbar);

// Global helper untuk WhatsApp
function openWhatsApp() {
    const text = "Halo Admin cafefotocopy, saya ingin info lebih lanjut.";
    window.open(`https://wa.me/6281226386095?text=${encodeURIComponent(text)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', renderNavbar);