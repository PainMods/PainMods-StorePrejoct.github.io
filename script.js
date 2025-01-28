let currentIndex = 0;

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function autoSlide() {
    currentIndex++;
    if (currentIndex >= slideCount) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set interval untuk auto-slide
setInterval(autoSlide, 3000); // Ganti slide setiap 3 detik

// Daftar produk
const products = [
  { id: 1, name: 'Product A', price: 10.00, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product B', price: 15.50, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product C', price: 20.75, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product D', price: 25.00, image: 'https://via.placeholder.com/200' },
];

// Menambahkan produk ke dalam grid
const productList = document.getElementById('productList');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'col'; // Membuat kolom untuk tiap card
  productCard.innerHTML = `
    <div class="card">
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${product.price.toFixed(2)}</p>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  `;
  productList.appendChild(productCard);
});