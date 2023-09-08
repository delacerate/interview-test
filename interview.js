function encodeBaju(batas_harga_jual, harga_jual_ideal, harga_yang_ditawar) {
    const kode_huruf = {
        'T': 0, 'E': 1, 'D': 2, 'U': 3, 'H': 4,
        'A': 5, 'S': 7, 'Y': 8, 'I': 9, 'K': 6
    };

    // Mengonversi huruf ke angka untuk mendapatkan harga aktual
    let harga_jual = 0;
    for (let i = 0; i < batas_harga_jual.length; i++) {
        harga_jual = harga_jual * 10 + kode_huruf[batas_harga_jual[i]];
    }

    //Mengonversi huruf ke angka untuk mendapatkan harga ideal
    let harga_ideal = 0;
    for (let i = 0; i < harga_jual_ideal.length; i++) {
        harga_ideal = harga_ideal * 10 + kode_huruf[harga_jual_ideal[i]];
    }

    // Menambahkan "000" pada akhir harga
    harga_jual *= 1000;
    harga_ideal *= 1000;

    // Memeriksa kondisi dengan if-else dan mengembalikan string yang sesuai
    if (harga_yang_ditawar < harga_jual) {
        return "REJECT, belum balik modal nih!";
    } else if (harga_yang_ditawar < harga_ideal) {
        return "ACCEPT, terima kasih sudah berbelanja";
    } else {
        return "GOOD, customer terbaik gak pake nawar";
    }
}

// Contoh penggunaan fungsi:
console.log(encodeBaju("AT", "YH", 70000)); // "ACCEPT, terima kasih sudah berbelanja"
console.log(encodeBaju("ESH", "DTT", 150000)); // "REJECT, belum balik modal nih!"
console.log(encodeBaju("DST", "DHT", 250000)); // "GOOD, customer terbaik gak pake nawar"
