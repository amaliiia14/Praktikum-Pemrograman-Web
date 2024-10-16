function hasil() {
    const bilangan = parseFloat(document.getElementById('bilangan').value);
    const bilangan2 = parseFloat(document.getElementById('bilangan2').value);
    const hasil = bilangan + bilangan2;

    document.getElementById('hasil').innerText = hasil;
}

function reset() {
    document.getElementById('bilangan').value = '';
    document.getElementById('bilangan2').value = '';
    document.getElementById('hasil').innerText = '0';
}
