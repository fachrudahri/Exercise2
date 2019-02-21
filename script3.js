// function periksaNilai() {
//     let tampung = document.getElementById('txtBilangan').value;

//     let cek = parseInt(tampung);
//     if( cek < 50) {
//         alert('nilai lebih kecil dari 50');
//     }

//     else if (cek > 51 && cek <= 75) {
//         alert('Nilai berada diantara 50 dan 75');
//     }

//     else if ( cek <= 100) {
//         alert('nilai lebih besar dari 50');
//     }

//     else {
//         alert('nilai berlebihan');
//     }
// }

function periksaNilai () {
    let tampung = document.getElementById('txtBilangan').value;

    let cek = parseInt(tampung);
    if( cek < 50) {
        alert('nilai lebih kecil dari 50');
    }
    else {
        if (cek >= 51 && cek <= 75) {
            alert('Nilai berada diantara 50 dan 75');
        }
        else {
            if (cek <= 100) {
                alert('Nilai lebih besar dari 75');
            }
            else {
                alert('Nilai di atas 100');
            }
        }
    }
}


function periksaUmur() {
    let tampung = document.getElementById("txtUmur").value;

    let cekdulu = parseInt(tampung);

    if (cekdulu > 17 && cekdulu <40) {
        alert("Anda termasuk dewasa");
    }

    else {
        if (cekdulu > 40 || cekdulu < 100) {
            alert("anda Sudah tua");
        }
    }
}