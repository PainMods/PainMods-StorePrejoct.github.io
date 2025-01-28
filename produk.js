// Fungsi untuk menambahkan produk ke keranjang yang disimpan di LocalStorage
function addToCart(name, price) {
    // Ambil data keranjang dari Local Storage, atau buat array kosong jika belum ada
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Cek apakah produk sudah ada di dalam keranjang, jika ada, update quantity-nya
    const productIndex = cart.findIndex(item => item.name === name);

    if (productIndex !== -1) {
        // Jika produk sudah ada, tambahkan harga ke quantity
        cart[productIndex].quantity += 1;
    } else {
        // Jika produk belum ada, masukkan produk baru dengan quantity 1
        cart.push({ name, price, quantity: 1 });
    }

    // Simpan keranjang kembali ke Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notifikasi produk telah ditambahkan
    alert(`${name} berhasil ditambahkan ke keranjang!`);
}