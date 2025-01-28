// Fungsi untuk menampilkan item di keranjang
function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Ambil data keranjang dari LocalStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Jika keranjang kosong
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Keranjang Anda kosong</p>";
        totalPriceElement.textContent = "Rp 0";
        return;
    }

    // Tampilkan produk di keranjang
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} (x${item.quantity}) - Rp ${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${index})">Hapus</button>
        `;
        cartContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    // Tampilkan total harga
    totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hapus item berdasarkan index
    cart.splice(index, 1);

    // Simpan kembali ke LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Perbarui tampilan
    displayCartItems();
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayCartItems);