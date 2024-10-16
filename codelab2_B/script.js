const form = document.getElementById('registrasi');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.querySelector('textarea[name="address"]').value.trim(); // Perbaiki selector

    if (!name || !email || !address) {
        alert('Semua data harus diisi!');
    } else {
        alert('Pendaftaran berhasil!');
        form.reset(); 
    }
});
