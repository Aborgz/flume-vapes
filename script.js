// Products Data
const products = [
  {
    id: 1,
    name: "Quantum X1",
    price: 79.99,
    images: ["src/assets/vape-1.jpg", "src/assets/vape-2.jpg", "src/assets/vape-3.jpg", "src/assets/vape-4.jpg"],
    description: "Next-gen pod system with AI temperature control",
    details: "The Quantum X1 features cutting-edge AI temperature control technology that automatically adjusts to your vaping preferences. With a sleek design and powerful performance, this device delivers consistent vapor production and exceptional flavor.",
    category: "Vape Device"
  },
  {
    id: 2,
    name: "Nebula Pro",
    price: 99.99,
    images: ["src/assets/vape-2.jpg", "src/assets/vape-3.jpg", "src/assets/vape-4.jpg", "src/assets/vape-5.jpg"],
    description: "Premium device with holographic display",
    details: "Experience the future of vaping with the Nebula Pro's stunning holographic display. This premium device combines advanced technology with elegant design, offering precise control and an immersive user experience.",
    category: "Vape Device"
  },
  {
    id: 3,
    name: "Cyber Mod Elite",
    price: 149.99,
    images: ["src/assets/vape-3.jpg", "src/assets/vape-4.jpg", "src/assets/vape-5.jpg", "src/assets/vape-6.jpg"],
    description: "Advanced mod with customizable LED effects",
    details: "The Cyber Mod Elite is the ultimate device for enthusiasts who demand the best. With fully customizable LED effects and advanced power settings, this mod delivers unparalleled performance and style.",
    category: "Vape Device"
  },
  {
    id: 4,
    name: "Fusion Pen",
    price: 59.99,
    images: ["src/assets/vape-4.jpg", "src/assets/vape-5.jpg", "src/assets/vape-6.jpg", "src/assets/vape-7.jpg"],
    description: "Compact and powerful with gradient finish",
    details: "The Fusion Pen combines portability with power in a stunning gradient finish. Perfect for on-the-go vaping, this compact device delivers impressive vapor production without compromising on style.",
    category: "Vape Device"
  },
  {
    id: 5,
    name: "Apex Gold",
    price: 129.99,
    images: ["src/assets/vape-5.jpg", "src/assets/vape-6.jpg", "src/assets/vape-7.jpg", "src/assets/vape-8.jpg"],
    description: "Luxury device with premium LED screen",
    details: "Elevate your vaping experience with the Apex Gold. This luxury device features a premium LED screen and sophisticated design that makes a statement wherever you go.",
    category: "Vape Device"
  },
  {
    id: 6,
    name: "Echo Mini",
    price: 49.99,
    images: ["src/assets/vape-6.jpg", "src/assets/vape-7.jpg", "src/assets/vape-8.jpg", "src/assets/vape-9.jpg"],
    description: "Ultra-compact pod with LED ring",
    details: "The Echo Mini proves that good things come in small packages. With its distinctive LED ring and ultra-compact design, this pod system is perfect for discreet vaping without sacrificing performance.",
    category: "Vape Device"
  },
  {
    id: 7,
    name: "Spectra Vision",
    price: 159.99,
    images: ["src/assets/vape-7.jpg", "src/assets/vape-8.jpg", "src/assets/vape-9.jpg", "src/assets/vape-10.jpg"],
    description: "Transparent design with visible tech",
    details: "See the innovation at work with the Spectra Vision's transparent design. This unique device showcases its advanced technology while delivering exceptional performance and style.",
    category: "Vape Device"
  },
  {
    id: 8,
    name: "Obsidian Pro",
    price: 119.99,
    images: ["src/assets/vape-8.jpg", "src/assets/vape-9.jpg", "src/assets/vape-10.jpg", "src/assets/vape-11.jpg"],
    description: "Matte black with rose gold details",
    details: "The Obsidian Pro combines understated elegance with powerful performance. Its matte black finish accented with rose gold details creates a sophisticated look that stands out from the crowd.",
    category: "Vape Device"
  },
  {
    id: 9,
    name: "Aurora Chrome",
    price: 89.99,
    images: ["src/assets/vape-9.jpg", "src/assets/vape-10.jpg", "src/assets/vape-11.jpg", "src/assets/vape-12.jpg"],
    description: "Holographic rainbow pen design",
    details: "Make a bold statement with the Aurora Chrome's holographic rainbow finish. This eye-catching device delivers both stunning aesthetics and reliable performance in a compact pen design.",
    category: "Vape Device"
  },
  {
    id: 10,
    name: "Titan Tactical",
    price: 139.99,
    images: ["src/assets/vape-10.jpg", "src/assets/vape-11.jpg", "src/assets/vape-12.jpg", "src/assets/vape-1.jpg"],
    description: "Rugged military-grade construction",
    details: "Built to withstand the toughest conditions, the Titan Tactical features military-grade construction and rugged durability. Perfect for those who need a device as tough as they are.",
    category: "Vape Device"
  },
  {
    id: 11,
    name: "Crystal Clear",
    price: 94.99,
    images: ["src/assets/vape-11.jpg", "src/assets/vape-12.jpg", "src/assets/vape-1.jpg", "src/assets/vape-2.jpg"],
    description: "See-through pod with RGB lighting",
    details: "Experience the magic of the Crystal Clear's see-through design enhanced by vibrant RGB lighting. Watch your device come to life with customizable colors and effects.",
    category: "Vape Device"
  },
  {
    id: 12,
    name: "Carbon Elite",
    price: 169.99,
    images: ["src/assets/vape-12.jpg", "src/assets/vape-1.jpg", "src/assets/vape-2.jpg", "src/assets/vape-3.jpg"],
    description: "Carbon fiber with OLED display",
    details: "The pinnacle of vaping technology, the Carbon Elite features genuine carbon fiber construction and a crisp OLED display. Experience premium performance wrapped in aerospace-grade materials.",
    category: "Vape Device"
  },
  {
    id: 13,
    name: "Cyber Blue Liquid",
    price: 24.99,
    images: ["src/assets/juice-1.jpg", "src/assets/juice-2.jpg", "src/assets/juice-3.jpg", "src/assets/juice-4.jpg"],
    description: "Neon blue raspberry flavor - 60ml",
    details: "Dive into the electrifying taste of Cyber Blue Liquid. This neon blue raspberry flavor delivers a sweet and tangy experience with a cool finish. Perfect for all-day vaping. 60ml bottle, available in multiple nicotine strengths.",
    category: "Vape Juice"
  },
  {
    id: 14,
    name: "Purple Haze Elixir",
    price: 24.99,
    images: ["src/assets/juice-2.jpg", "src/assets/juice-3.jpg", "src/assets/juice-4.jpg", "src/assets/juice-1.jpg"],
    description: "Grape fusion with menthol - 60ml",
    details: "Experience the mystical blend of Purple Haze Elixir. Rich grape fusion with a refreshing menthol kick creates a perfectly balanced vape. 60ml bottle, available in multiple nicotine strengths.",
    category: "Vape Juice"
  },
  {
    id: 15,
    name: "Neon Mint Fusion",
    price: 24.99,
    images: ["src/assets/juice-3.jpg", "src/assets/juice-4.jpg", "src/assets/juice-1.jpg", "src/assets/juice-2.jpg"],
    description: "Ultra-cool mint blend - 60ml",
    details: "Cool down with Neon Mint Fusion's ultra-refreshing mint blend. This crisp and clean flavor delivers an icy sensation that's perfect for hot days. 60ml bottle, available in multiple nicotine strengths.",
    category: "Vape Juice"
  },
  {
    id: 16,
    name: "Solar Citrus Blast",
    price: 24.99,
    images: ["src/assets/juice-4.jpg", "src/assets/juice-1.jpg", "src/assets/juice-2.jpg", "src/assets/juice-3.jpg"],
    description: "Tropical citrus explosion - 60ml",
    details: "Brighten your day with Solar Citrus Blast. This tropical citrus explosion combines multiple citrus fruits for a zesty, refreshing vape experience. 60ml bottle, available in multiple nicotine strengths.",
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
        <img src="${item.images ? item.images[0] : item.image}" alt="${item.name}" class="cart-item-image">
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
    <div class="product-card" onclick="viewProduct(${product.id})">
      <img src="${product.images[0]}" alt="${product.name}" class="product-image">
      <div class="product-content">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
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

// Navigate to product detail page
function viewProduct(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// Product Detail Page Functions
function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    document.getElementById('product-detail-container').innerHTML = `
      <div style="text-align: center; padding: 4rem 0;">
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Product Not Found</h2>
        <button onclick="window.location.href='index.html'" class="cta-button">Back to Home</button>
      </div>
    `;
    return;
  }
  
  let selectedImage = 0;
  
  const container = document.getElementById('product-detail-container');
  container.innerHTML = `
    <button onclick="window.location.href='index.html'" class="back-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Shop
    </button>
    
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="main-image">
          <img id="main-product-image" src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="thumbnail-grid">
          ${product.images.map((img, index) => `
            <button class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
              <img src="${img}" alt="${product.name} ${index + 1}">
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h1 class="product-title">${product.name}</h1>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        
        <div class="product-section">
          <h3>Description</h3>
          <p>${product.description}</p>
        </div>
        
        <div class="product-section">
          <h3>Product Details</h3>
          <p>${product.details}</p>
        </div>
        
        <button class="add-to-cart-btn large" onclick="addToCartFromDetail(${product.id})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
        
        <div class="product-features">
          <div class="feature-item">
            <span class="feature-label">Free Shipping</span>
            <span class="feature-value">Yes</span>
          </div>
          <div class="feature-item">
            <span class="feature-label">Warranty</span>
            <span class="feature-value">1 Year</span>
          </div>
          <div class="feature-item">
            <span class="feature-label">In Stock</span>
            <span class="feature-value">Available</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add thumbnail click handlers
  const thumbnails = container.querySelectorAll('.thumbnail');
  const mainImage = container.querySelector('#main-product-image');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.dataset.index);
      mainImage.src = product.images[index];
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

function addToCartFromDetail(productId) {
  addToCart(productId);
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
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
  // Check if we're on the product detail page
  if (document.getElementById('product-detail-container')) {
    loadProductDetail();
    updateCartUI();
  } else {
    // We're on the home page
    renderProducts();
    updateCartUI();
    setInterval(updateCountdown, 1000);
  }
});
