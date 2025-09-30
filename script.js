// Products Data
const products = [
  {
    id: 1,
    name: "Quantum X1",
    price: 79.99,
    image: "src/assets/vape-1.jpg",
    description: "Next-gen pod system with AI temperature control",
    category: "Vape Device"
  },
  {
    id: 2,
    name: "Nebula Pro",
    price: 99.99,
    image: "src/assets/vape-2.jpg",
    description: "Premium device with holographic display",
    category: "Vape Device"
  },
  {
    id: 3,
    name: "Cyber Mod Elite",
    price: 149.99,
    image: "src/assets/vape-3.jpg",
    description: "Advanced mod with customizable LED effects",
    category: "Vape Device"
  },
  {
    id: 4,
    name: "Fusion Pen",
    price: 59.99,
    image: "src/assets/vape-4.jpg",
    description: "Compact and powerful with gradient finish",
    category: "Vape Device"
  },
  {
    id: 5,
    name: "Apex Gold",
    price: 129.99,
    image: "src/assets/vape-5.jpg",
    description: "Luxury device with premium LED screen",
    category: "Vape Device"
  },
  {
    id: 6,
    name: "Echo Mini",
    price: 49.99,
    image: "src/assets/vape-6.jpg",
    description: "Ultra-compact pod with LED ring",
    category: "Vape Device"
  },
  {
    id: 7,
    name: "Spectra Vision",
    price: 159.99,
    image: "src/assets/vape-7.jpg",
    description: "Transparent design with visible tech",
    category: "Vape Device"
  },
  {
    id: 8,
    name: "Obsidian Pro",
    price: 119.99,
    image: "src/assets/vape-8.jpg",
    description: "Matte black with rose gold details",
    category: "Vape Device"
  },
  {
    id: 9,
    name: "Aurora Chrome",
    price: 89.99,
    image: "src/assets/vape-9.jpg",
    description: "Holographic rainbow pen design",
    category: "Vape Device"
  },
  {
    id: 10,
    name: "Titan Tactical",
    price: 139.99,
    image: "src/assets/vape-10.jpg",
    description: "Rugged military-grade construction",
    category: "Vape Device"
  },
  {
    id: 11,
    name: "Crystal Clear",
    price: 94.99,
    image: "src/assets/vape-11.jpg",
    description: "See-through pod with RGB lighting",
    category: "Vape Device"
  },
  {
    id: 12,
    name: "Carbon Elite",
    price: 169.99,
    image: "src/assets/vape-12.jpg",
    description: "Carbon fiber with OLED display",
    category: "Vape Device"
  },
  {
    id: 13,
    name: "Cyber Blue Liquid",
    price: 24.99,
    image: "src/assets/juice-1.jpg",
    description: "Neon blue raspberry flavor - 60ml",
    category: "Vape Juice"
  },
  {
    id: 14,
    name: "Purple Haze Elixir",
    price: 24.99,
    image: "src/assets/juice-2.jpg",
    description: "Grape fusion with menthol - 60ml",
    category: "Vape Juice"
  },
  {
    id: 15,
    name: "Neon Mint Fusion",
    price: 24.99,
    image: "src/assets/juice-3.jpg",
    description: "Ultra-cool mint blend - 60ml",
    category: "Vape Juice"
  },
  {
    id: 16,
    name: "Solar Citrus Blast",
    price: 24.99,
    image: "src/assets/juice-4.jpg",
    description: "Tropical citrus explosion - 60ml",
    category: "Vape Juice"
  }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('vapeverse-cart') || '[]');

function saveCart() {
  localStorage.setItem('vapeverse-cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartFooter = document.getElementById('cart-footer');
  const cartTotal = document.getElementById('cart-total');
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartFooter.style.display = 'block';
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
    showToast('Updated cart', `${product.name} quantity increased`);
  } else {
    cart.push({ ...product, quantity: 1 });
    showToast('Added to cart', `${product.name} has been added to your cart`);
  }
  
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Removed from cart', 'Item has been removed from your cart');
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
  }
}

// Toast Notifications
function showToast(title, description) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastDescription = document.getElementById('toast-description');
  
  toastTitle.textContent = title;
  toastDescription.textContent = description;
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Render Products
function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  
  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-content">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Cart Dropdown
const cartButton = document.getElementById('cart-button');
const cartDropdown = document.getElementById('cart-dropdown');
const cartClose = document.getElementById('cart-close');

cartButton.addEventListener('click', () => {
  cartDropdown.classList.add('active');
});

cartClose.addEventListener('click', () => {
  cartDropdown.classList.remove('active');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
  if (!cartDropdown.contains(e.target) && !cartButton.contains(e.target)) {
    cartDropdown.classList.remove('active');
  }
});

// Countdown Timer
function updateCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  let days = parseInt(daysEl.textContent);
  let hours = parseInt(hoursEl.textContent);
  let minutes = parseInt(minutesEl.textContent);
  let seconds = parseInt(secondsEl.textContent);
  
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      } else {
        hours = 23;
        if (days > 0) {
          days--;
        }
      }
    }
  }
  
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      mobileNav.classList.remove('active');
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setInterval(updateCountdown, 1000);
});
