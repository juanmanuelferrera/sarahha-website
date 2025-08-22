// ========================================
// SARAH | HA - Modern Jewelry Website JS
// ========================================

// Product Data
const products = [
    // Christian Collection
    {
        id: 1,
        name: "Complete Bible Classic Cross with Crystal Inserts",
        price: 199.00,
        category: "religious",
        collection: "christian",
        description: "Complete King James Bible (31,102 verses, 788,258 words) nano-inscribed on sterling silver cross",
        features: ["925 Sterling Silver", "Crystal Inserts", "Complete KJV Bible", "NanoFiche™ Technology"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-cross.jpg"
    },
    {
        id: 2,
        name: "Nano Bible Classic Cross In 925 Silver",
        price: 199.00,
        category: "religious",
        collection: "christian",
        description: "Elegant sterling silver cross pendant with complete Bible text preserved for millennia",
        features: ["925 Sterling Silver", "Complete Bible Text", "Archival Quality", "18\" Chain Included"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-cross.jpg"
    },
    {
        id: 3,
        name: "Nano King James Bible on Feligree Cross",
        price: 199.00,
        category: "religious",
        collection: "christian",
        description: "Intricate feligree design cross featuring the complete King James Bible in nano-script",
        features: ["Feligree Design", "925 Sterling Silver", "Complete KJV", "Artistic Craftsmanship"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-cross.jpg"
    },
    {
        id: 4,
        name: "Nano Bible Cross Pendant with 18\" Chain",
        price: 249.00,
        category: "religious",
        collection: "christian",
        description: "Complete set includes elegant cross pendant and premium 18\" 1.4mm curb chain",
        features: ["18\" Curb Chain", "925 Sterling Silver", "Complete Bible", "Ready to Wear"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-cross.jpg"
    },
    {
        id: 5,
        name: "Bible in Folded Angel Wings",
        price: 249.00,
        category: "religious",
        collection: "christian",
        description: "Entire King James Bible nano-engraved in beautifully folded angel wings design",
        features: ["Angel Wings Design", "Complete Bible", "925 Sterling Silver", "Symbolic Protection"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-wings.jpg"
    },
    {
        id: 6,
        name: "24K Gold Plated Nano Bible Cross",
        price: 349.00,
        category: "religious",
        collection: "christian",
        description: "Premium 925 solid silver cross with 24K gold plating and complete Bible text",
        features: ["24K Gold Plated", "925 Solid Silver Base", "Complete Bible", "Luxury Finish"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-gold-cross.jpg"
    },
    
    // Hindu Collection
    {
        id: 7,
        name: "Nano Bhagavad Gita with Om",
        price: 149.00,
        category: "religious",
        collection: "hindu",
        description: "Complete Bhagavad Gita (700 verses) with Om symbol highlighted with sparkling microlenses",
        features: ["Complete Bhagavad Gita", "Om Symbol", "Sparkling Microlenses", "925 Sterling Silver"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-om.jpg"
    },
    {
        id: 8,
        name: "Nano Gita Om Classic Setting with Chain",
        price: 199.00,
        category: "religious",
        collection: "hindu",
        description: "Elegant Om pendant with complete Gita text, includes premium 18\" chain",
        features: ["18\" Chain Included", "Classic Setting", "Complete Gita", "Om Symbol Design"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-om.jpg"
    },
    
    // Personalized Collection
    {
        id: 9,
        name: "Personalized Sterling Silver Pendant",
        price: 550.00,
        category: "personalized",
        collection: "personalized",
        description: "Custom pendant with up to 20 photos and personal documents preserved forever",
        features: ["Up to 20 Photos", "Personal Documents", "Crystal Embellishments", "Custom Design"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-personal.jpg"
    },
    {
        id: 10,
        name: "Custom Family Archive Service",
        price: 300.00,
        category: "personalized",
        collection: "personalized",
        description: "Setup service for preserving family history and memories (per page/photo pricing additional)",
        features: ["Family History", "Memory Preservation", "Setup Service", "Consultation Included"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-family.jpg"
    },
    
    // Literary Collection
    {
        id: 11,
        name: "Shakespeare Complete Works Medallion",
        price: 299.00,
        category: "literary",
        collection: "literary",
        description: "Complete works of Shakespeare preserved in elegant nano-medallion format",
        features: ["Complete Shakespeare", "Medallion Format", "Billions of Diffractive Elements", "Literary Heritage"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-shakespeare.jpg"
    },
    {
        id: 12,
        name: "Literary Classics Collection",
        price: 349.00,
        category: "literary",
        collection: "literary",
        description: "Curated collection of literary masterpieces in beautiful archival medallions",
        features: ["Multiple Classics", "Archival Quality", "Premium Medallions", "Educational Value"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-books.jpg"
    },
    
    // Accessories
    {
        id: 13,
        name: "Premium Sterling Silver Chain 18\"",
        price: 79.00,
        category: "accessories",
        collection: "accessories",
        description: "High-quality 925 sterling silver chain, perfect for any pendant",
        features: ["925 Sterling Silver", "18\" Length", "1.4mm Curb Style", "Durable Clasp"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-chain.jpg"
    },
    {
        id: 14,
        name: "Premium Gift Box Set",
        price: 25.00,
        category: "accessories",
        collection: "accessories",
        description: "Elegant presentation box for your precious archival jewelry",
        features: ["Luxury Presentation", "Protective Padding", "Gift Ready", "Brand Packaging"],
        stripeLink: "https://buy.stripe.com/bIY9CD8kH",
        image: "placeholder-box.jpg"
    }
];

// DOM Elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle') || document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const searchToggle = document.querySelector('.search-toggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.querySelector('.search-close');
const cartToggle = document.querySelector('.cart-toggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.querySelector('.cart-close');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('sarahha-cart')) || [];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderProducts();
    updateCartUI();
    setupSmoothScrolling();
    setupAnimations();
    setupMagnificationDemo();
}

// Event Listeners
function setupEventListeners() {
    // Mobile Menu
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Search
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', toggleSearch);
        searchClose?.addEventListener('click', toggleSearch);
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) toggleSearch();
        });
    }
    
    // Cart
    if (cartToggle && cartSidebar) {
        cartToggle.addEventListener('click', toggleCart);
        cartClose?.addEventListener('click', toggleCart);
        cartOverlay?.addEventListener('click', toggleCart);
    }
    
    // Product Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Mobile Dropdown
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            content.classList.toggle('active');
            icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Search Form
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
    
    // Scroll Effect for Header
    window.addEventListener('scroll', handleScroll);
    
    // ESC Key Handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (searchOverlay?.classList.contains('active')) toggleSearch();
            if (cartSidebar?.classList.contains('active')) toggleCart();
            if (mobileMenu?.classList.contains('active')) toggleMobileMenu();
        }
    });
}

// Mobile Menu
function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
}

// Search
function toggleSearch() {
    if (searchOverlay) {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active')) {
            document.querySelector('.search-input')?.focus();
        }
        document.body.style.overflow = searchOverlay.classList.contains('active') ? 'hidden' : '';
    }
}

function handleSearch(e) {
    e.preventDefault();
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        // Implement search functionality
        console.log('Searching for:', query);
        // Filter products based on query
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        renderProducts(filteredProducts);
        toggleSearch();
        
        // Scroll to products section
        document.getElementById('productsGrid')?.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cart
function toggleCart() {
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartUI();
        saveCart();
        
        // Show cart briefly
        toggleCart();
        
        // Show success feedback
        showNotification(`${product.name} added to cart!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartTotal = document.querySelector('.cart-total span');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    if (cartItems && cartEmpty) {
        if (cart.length === 0) {
            cartItems.style.display = 'none';
            cartEmpty.style.display = 'block';
        } else {
            cartItems.style.display = 'block';
            cartEmpty.style.display = 'none';
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="quantity-btn">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="quantity-btn">+</button>
                        <button onclick="removeFromCart(${item.id})" class="remove-btn">×</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (cartTotal) {
        cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
}

function saveCart() {
    localStorage.setItem('sarahha-cart', JSON.stringify(cart));
}

// Product Rendering
function renderProducts(productsToRender = products) {
    if (!productsGrid) return;
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <div class="product-image-placeholder">
                    <i class="fas fa-gem"></i>
                </div>
                <div class="product-badge">${product.collection}</div>
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="openProductModal(${product.id})">Quick View</button>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    ${product.features.slice(0, 2).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <a href="${product.stripeLink}" target="_blank" class="btn btn-secondary stripe-btn">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Product Filtering
function handleFilter(e) {
    const filter = e.target.dataset.filter;
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter products
    let filteredProducts = products;
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    // Animate out current products
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        }, index * 50);
    });
    
    // Render new products after animation
    setTimeout(() => {
        renderProducts(filteredProducts);
        
        // Animate in new products
        setTimeout(() => {
            const newCards = document.querySelectorAll('.product-card');
            newCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 50);
    }, productCards.length * 50 + 200);
}

// Product Modal (Quick View)
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal HTML
    const modalHTML = `
        <div class="product-modal-overlay" onclick="closeProductModal()">
            <div class="product-modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeProductModal()">×</button>
                <div class="modal-content">
                    <div class="modal-image">
                        <div class="modal-image-placeholder">
                            <i class="fas fa-gem"></i>
                        </div>
                    </div>
                    <div class="modal-info">
                        <h2>${product.name}</h2>
                        <p class="modal-price">$${product.price.toFixed(2)}</p>
                        <p class="modal-description">${product.description}</p>
                        <div class="modal-features">
                            <h4>Features:</h4>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="modal-actions">
                            <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();">
                                Add to Cart
                            </button>
                            <a href="${product.stripeLink}" target="_blank" class="btn btn-secondary">
                                Buy Now with Stripe
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.querySelector('.product-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu?.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Scroll Effects
function handleScroll() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
}

// Animations
function setupAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.collection-card, .tech-feature, .craft-step, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Magnification Demo
function setupMagnificationDemo() {
    const magLevels = document.querySelectorAll('.mag-level');
    const nanoContent = document.querySelector('.nano-content');
    
    magLevels.forEach(level => {
        level.addEventListener('click', function() {
            magLevels.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const magLevel = this.dataset.level;
            
            if (nanoContent) {
                switch(magLevel) {
                    case '1x':
                        nanoContent.style.transform = 'scale(1)';
                        break;
                    case '100x':
                        nanoContent.style.transform = 'scale(1.5)';
                        break;
                    case '400x':
                        nanoContent.style.transform = 'scale(2)';
                        break;
                }
            }
        });
    });
}

// Newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        // Here you would typically send to your email service
        showNotification('Thank you for subscribing to our newsletter!');
        e.target.querySelector('input[type="email"]').value = '';
    }
}

// Notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: type === 'success' ? '#10B981' : '#EF4444',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Enhanced Checkout function with multiple items support
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // If only one item, go directly to Stripe
    if (cart.length === 1) {
        const item = cart[0];
        window.open(item.stripeLink, '_blank');
        showNotification('Redirecting to secure checkout...');
        return;
    }
    
    // Multiple items - show checkout options modal
    showMultiItemCheckout();
}

// Handle multiple items in cart
function showMultiItemCheckout() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const modalHTML = `
        <div class="checkout-modal-overlay" onclick="closeCheckoutModal()">
            <div class="checkout-modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeCheckoutModal()">×</button>
                <div class="checkout-content">
                    <h2>Complete Your Order</h2>
                    <div class="checkout-summary">
                        <p><strong>${totalItems} items</strong> • <strong>Total: $${totalPrice.toFixed(2)}</strong></p>
                    </div>
                    
                    <div class="checkout-options">
                        <div class="checkout-option">
                            <h3>Option 1: Purchase Individual Items</h3>
                            <p>Complete separate checkout for each product (recommended for different shipping addresses)</p>
                            <div class="checkout-items">
                                ${cart.map(item => `
                                    <div class="checkout-item">
                                        <span>${item.name} (×${item.quantity})</span>
                                        <button class="btn btn-primary btn-small" onclick="buyIndividualItem(${item.id})">
                                            Buy $${(item.price * item.quantity).toFixed(2)}
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="checkout-option">
                            <h3>Option 2: Quick Checkout</h3>
                            <p>Start with your most expensive item and continue shopping after</p>
                            <button class="btn btn-primary btn-large" onclick="buyHighestValueItem()">
                                Start with ${getMostExpensiveItem().name} - $${getMostExpensiveItem().price}
                            </button>
                        </div>
                        
                        <div class="checkout-option">
                            <h3>Option 3: Contact for Bulk Order</h3>
                            <p>Get personalized service and possible discounts for multiple items</p>
                            <button class="btn btn-secondary btn-large" onclick="contactForBulkOrder()">
                                Contact Us for Bulk Pricing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Helper functions for checkout
function buyIndividualItem(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        window.open(item.stripeLink, '_blank');
        showNotification(`Opening checkout for ${item.name}...`);
    }
}

function getMostExpensiveItem() {
    return cart.reduce((max, item) => 
        (item.price * item.quantity) > (max.price * max.quantity) ? item : max
    );
}

function buyHighestValueItem() {
    const expensiveItem = getMostExpensiveItem();
    window.open(expensiveItem.stripeLink, '_blank');
    showNotification(`Opening checkout for ${expensiveItem.name}...`);
    closeCheckoutModal();
}

function contactForBulkOrder() {
    const cartDetails = cart.map(item => 
        `${item.name} (×${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const message = `Hi! I'm interested in purchasing multiple items:\n\n${cartDetails}\n\nTotal: $${totalPrice.toFixed(2)}\n\nCan you help with bulk pricing or combined shipping?`;
    
    // Try to open Tawk.to chat if available
    if (window.Tawk_API) {
        window.Tawk_API.maximize();
        setTimeout(() => {
            if (window.Tawk_API.sendMessage) {
                window.Tawk_API.sendMessage(message);
            }
        }, 1000);
    } else {
        // Fallback to email
        const emailSubject = encodeURIComponent('Bulk Order Inquiry - SARAH | HA');
        const emailBody = encodeURIComponent(message);
        window.open(`mailto:support@sarahha.com?subject=${emailSubject}&body=${emailBody}`);
    }
    
    closeCheckoutModal();
    showNotification('Opening chat to discuss your bulk order...');
}

function closeCheckoutModal() {
    const modal = document.querySelector('.checkout-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Add checkout button functionality
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }
});

// Collection Navigation
function navigateToCollection(collectionName) {
    const filteredProducts = products.filter(product => product.collection === collectionName);
    renderProducts(filteredProducts);
    
    // Update filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.querySelector(`[data-filter="${collectionName}"]`) || 
                      document.querySelector('[data-filter="religious"]') ||
                      document.querySelector('[data-filter="all"]');
    if (targetBtn) targetBtn.classList.add('active');
    
    // Scroll to products
    document.getElementById('productsGrid')?.scrollIntoView({ behavior: 'smooth' });
}

// Chat Widget Functionality (Disabled - Using Tawk.to for real-time chat)
// To re-enable the demo chat, uncomment the function below
/*
function initializeChatWidget() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const instantAnswerBtns = document.querySelectorAll('.instant-answer-btn');

    // Chat responses for instant answers
    const chatResponses = {
        contact: {
            text: "You can reach us at: <br>📧 Email: support@sarahha.com<br>📞 Phone: 1-800-SARAH-HA<br>📍 Location: Rochester, NY<br>💬 Or continue chatting here!"
        },
        return: {
            text: "We offer a 30-day satisfaction guarantee! If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. Items must be in original condition with all packaging. Custom/personalized items are final sale."
        },
        readable: {
            text: "The nano Bible engraving is readable with a 400x microscope (included with select packages) or through our mobile app. The text is permanently inscribed at the molecular level and will remain readable for over 10,000 years!"
        },
        sizes: {
            text: "Yes! Our Nano Bible pendants come in various sizes:<br>• Small (15mm) - $199<br>• Medium (20mm) - $249<br>• Large (25mm) - $299<br>• XL with chain (30mm) - $349<br>All contain the complete King James Bible!"
        },
        custom: {
            text: "Our personalized pendants can preserve up to 20 photos and documents! Simply upload your files during checkout, and our team will nano-inscribe them onto your pendant. The process takes 5-7 business days. Starting at $550."
        },
        shipping: {
            text: "Shipping times:<br>• Standard items: 3-5 business days<br>• Custom/Personalized: 7-10 business days<br>• Express shipping available at checkout<br>• Free shipping on orders over $199!"
        }
    };

    // Add message to chat
    function addChatMessage(text, sender) {
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'chat-message-bubble';
        bubble.innerHTML = text;
        
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Generate bot response based on message
    function generateBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for keywords
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Our prices range from $149 for the Bhagavad Gita pendant to $550+ for personalized pieces. Would you like details about a specific collection?";
        } else if (lowerMessage.includes('bible')) {
            return "Our Nano Bible collection features the complete King James Bible inscribed on beautiful sterling silver crosses. Prices start at $199. Would you like to see the different styles available?";
        } else if (lowerMessage.includes('custom') || lowerMessage.includes('personalized')) {
            return "Our personalized pendants are perfect for preserving family memories! You can include up to 20 photos and documents. Starting at $550. Would you like to start creating your custom piece?";
        } else if (lowerMessage.includes('technology') || lowerMessage.includes('nano')) {
            return "Our NanoFiche™ technology uses molecular-level inscription to preserve text and images for over 10,000 years! It's been tested by Los Alamos National Lab. Pretty amazing, right?";
        } else if (lowerMessage.includes('ship')) {
            return "We offer fast shipping! Standard items ship in 3-5 days, custom pieces in 7-10 days. Free shipping on orders over $199!";
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! Welcome to SARAH | HA! How can I help you find the perfect archival jewelry piece today?";
        } else if (lowerMessage.includes('thank')) {
            return "You're welcome! Is there anything else you'd like to know about our jewelry?";
        } else {
            return "That's a great question! I'd be happy to help. Could you tell me more about what you're looking for? Are you interested in our religious collections, personalized pieces, or would you like to learn about our technology?";
        }
    }

    // Initialize chat if elements exist
    if (chatButton && chatWindow) {
        // Toggle chat window
        chatButton.addEventListener('click', function() {
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active')) {
                chatInput?.focus();
                // Hide notification when chat opens
                const notification = chatButton.querySelector('.chat-notification');
                if (notification) notification.style.display = 'none';
            }
        });
        
        // Close chat
        chatClose?.addEventListener('click', function() {
            chatWindow.classList.remove('active');
        });
        
        // Handle instant answer buttons
        instantAnswerBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const answerKey = this.dataset.answer;
                const response = chatResponses[answerKey];
                
                if (response) {
                    // Add user question
                    addChatMessage(this.textContent, 'user');
                    
                    // Add bot response after a short delay
                    setTimeout(() => {
                        addChatMessage(response.text, 'bot');
                    }, 500);
                }
            });
        });
        
        // Handle chat form submission
        chatForm?.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                addChatMessage(message, 'user');
                
                // Clear input
                chatInput.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    const botResponse = generateBotResponse(message);
                    addChatMessage(botResponse, 'bot');
                }, 1000);
            }
        });
        
        // Auto-show chat notification after delay
        setTimeout(() => {
            const notification = document.querySelector('.chat-notification');
            if (notification) {
                notification.style.animation = 'pulse 2s infinite';
            }
        }, 5000);
    }
}
*/

// Tawk.to customization (runs after Tawk.to loads)
window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onLoad = function(){
    // Customize Tawk.to widget colors to match SARAH | HA brand
    window.Tawk_API.setAttributes({
        'name'  : 'Website Visitor',
        'email' : '',
        'hash'  : ''
    }, function(error){});
    
    // You can add custom data about the visitor
    if (cart && cart.length > 0) {
        window.Tawk_API.addTags(['has-items-in-cart'], function(error){});
    }
};

// Optional: Hide default Tawk.to widget and use custom button
// Uncomment below to use custom button instead of default widget
/*
window.Tawk_API.onLoad = function(){
    window.Tawk_API.hideWidget();
};

// Custom chat button to open Tawk.to
document.getElementById('customChatBtn')?.addEventListener('click', function() {
    window.Tawk_API.maximize();
});
*/

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.proceedToCheckout = proceedToCheckout;
window.navigateToCollection = navigateToCollection;