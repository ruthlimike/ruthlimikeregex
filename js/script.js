
// Mendapatkan elemen input username dan pesan kesalahan
var usernameInput = document.getElementById('Username');
var errorMessage = document.getElementById('usernameError');

// Event listener untuk setiap perubahan di input username
usernameInput.addEventListener('input', function() {
    var username = usernameInput.value;
   
// Ekspresi reguler untuk validasi username
var usernamePattern = /^(?=.*[a-z])[a-z\d._]{6,20}$/;
 
 // Memeriksa apakah username sesuai dengan pola yang ditentukan
    if (!usernamePattern.test(username)) {
        errorMessage.textContent = 'Username harus terdiri dari 6-20 karakter, huruf kecil, simbol (. atau _) dan angka opsional , tanpa spasi.';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'block'; // Menampilkan pesan kesalahan
    } else {
        errorMessage.textContent = 'username valid'; // Menghapus pesan kesalahan jika username valid
        errorMessage.style.color = 'green';
        errorMessage.style.display = 'block'; // Menyembunyikan pesan kesalahan
    }
});




// Mendapatkan elemen input email dan pesan kesalahan
var emailInput = document.getElementById('email');
var emailErrorMessage = document.getElementById('emailError');

// Event listener untuk setiap perubahan di input email
emailInput.addEventListener('input', function() {
    var email = emailInput.value;
    // Ekspresi reguler untuk validasi email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Memeriksa apakah email sesuai dengan pola yang ditentukan
    if (!emailPattern.test(email)) {
        emailErrorMessage.textContent = 'email tidak valid.';
        emailErrorMessage.style.color = 'red';
        emailErrorMessage.style.display = 'block'; // Menampilkan pesan kesalahan
    } else {
        emailErrorMessage.textContent = 'email valid'; // Menghapus pesan kesalahan jika email valid
        emailErrorMessage.style.color = 'green';
        emailErrorMessage.style.display = 'block'; // Menyembunyikan pesan kesalahan
    }
});



// Mendapatkan elemen input password dan pesan kesalahan
var passwordInput = document.getElementById('password');
var passwordErrorMessage = document.getElementById('passwordError');

// Event listener untuk setiap perubahan di input password
passwordInput.addEventListener('input', function() {
    var password = passwordInput.value;
    // Ekspresi reguler untuk validasi password
    var passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-=`{}\[\]:;"'<>,.?/])(?!.*\s).{8,}$/;
    
    // Memeriksa apakah password sesuai dengan pola yang ditentukan
    if (!passwordPattern.test(password)) {
        passwordErrorMessage.textContent = 'Password harus terdiri dari minimal 8 karakter, minimal 1 huruf besar, minimal 1 simbol, minimal 1 angka, tanpa spasi.';
        passwordErrorMessage.style.color = 'red';
        passwordErrorMessage.style.display = 'block'; // Menampilkan pesan kesalahan
    } else {
        passwordErrorMessage.textContent = 'password sesuai'; // Menghapus pesan kesalahan jika password valid
        passwordErrorMessage.style.color = 'green';
        passwordErrorMessage.style.display = 'block'; // Menyembunyikan pesan kesalahan
    }
});



//SCRIPT BANK NOMOR REKENING
document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen-elemen yang diperlukan
    const bcaInput = document.getElementById("bca");
    const briInput = document.getElementById("bri");
    const bniInput = document.getElementById("bni");
    const norekInput = document.getElementById("norek");
    const bcaError = document.getElementById("bcaError");
    const briError = document.getElementById("briError");
    const bniError = document.getElementById("bniError");

    // Membuat fungsi untuk menyembunyikan pesan kesalahan nomor rekening BCA
function hideBCAError() {
    bcaError.textContent = "";
    bcaError.style.display = 'none'; // Menyembunyikan pesan kesalahan
}

function hideBRIError() {
    briError.textContent = "";
    briError.style.display = 'none'; // Menyembunyikan pesan kesalahan
}

function hideBNIError() {
    bniError.textContent = "";
    bniError.style.display = 'none'; // Menyembunyikan pesan kesalahan
}


// Membuat fungsi validasi BCA saat tombol radio berubah
bcaInput.addEventListener("change", function() {
    if (bcaInput.checked) {
        if (norekInput.value.length !== 10) {
            bcaError.textContent = "Nomor rekening BCA harus 10 digit";
            bcaError.style.color = 'red'; // Mengubah warna teks menjadi merah
            bcaError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            bcaError.textContent = "Nomor rekening BCA valid";
            bcaError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            bcaError.style.display = 'block'; // Menampilkan pesan kesalahan
        }
       
        hideBRIError(); // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening BCA
        hideBNIError(); 
    }
});



 // Membuat fungsi validasi BCA saat input berubah
 norekInput.addEventListener("input", function() {
    if (bcaInput.checked) {
        if (norekInput.value.length !== 10) {
            bcaError.textContent = "Nomor rekening BCA harus 10 digit";
            bcaError.style.color = 'red'; // Mengubah warna teks menjadi merah
            bcaError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            bcaError.textContent = "Nomor Rekening BCA valid"; // Menghapus pesan kesalahan jika valid
            bcaError.style.color = 'green'; // Mengubah warna teks menjadi merah
            bcaError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        hideBRIError(); // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening BCA
        hideBNIError(); 
    }
});



// Menambahkan event listener ke tombol radio BRI
briInput.addEventListener("change", function() {
    if (briInput.checked) {

        if (norekInput.value.length !== 15) {
            briError.textContent = "Nomor rekening BRI harus 15 digit";
            briError.style.color = 'red'; // Mengubah warna teks menjadi merah
            briError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            briError.textContent = "Nomor Rekening BRI valid"; // Menghapus pesan kesalahan jika valid
            briError.style.color = 'green'; // Mengubah warna teks menjadi merah
            briError.style.display = 'block'; // Menampilkan pesan kesalahan
        }


        hideBCAError(); // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening BCA
        hideBNIError(); 
    }
});




  // Membuat fungsi validasi BRI saat input berubah
norekInput.addEventListener("input", function() {
    if (briInput.checked) {
        if (norekInput.value.length !== 15) {
            briError.textContent = "Nomor rekening BRI harus 15 digit";
            briError.style.color = 'red'; // Mengubah warna teks menjadi merah
            briError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            briError.textContent = "Nomor Rekening BRI valid"; // Menghapus pesan kesalahan jika valid
            briError.style.color = 'green'; // Mengubah warna teks menjadi merah
            briError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        hideBCAError(); // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening BCA
        hideBNIError(); 
    }
});



// Menambahkan event listener ke tombol radio BNI
bniInput.addEventListener("change", function() {
    if (bniInput.checked) {
        // Validasi nomor rekening BNI
        if (norekInput.value.length !== 10) {
            bniError.textContent = "Nomor rekening BNI harus 10 digit";
            bniError.style.color = 'red'; // Mengubah warna teks menjadi merah
            bniError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            bniError.textContent = "Nomor Rekening BNI valid";
            bniError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            bniError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideBCAError();
        hideBRIError();
    }
});




   // Membuat fungsi validasi BNI saat input berubah
norekInput.addEventListener("input", function() {
    if (bniInput.checked) {
        // Validasi nomor rekening BNI
        if (norekInput.value.length !== 10) {
            bniError.textContent = "Nomor rekening BNI harus 10 digit";
            bniError.style.color = 'red'; // Mengubah warna teks menjadi merah
            bniError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            bniError.textContent = "Nomor Rekening BNI valid";
            bniError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            bniError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideBCAError();
        hideBRIError();
    }
});


});



//SIM KTP PASPOR

document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen-elemen yang diperlukan
    const simInput = document.getElementById("sim");
    const ktpInput = document.getElementById("ktp");
    const pasporInput = document.getElementById("paspor");
    const norekInput = document.getElementById("nomor");
    const simError = document.getElementById("simError");
    const ktpError = document.getElementById("ktpError");
    const pasporError = document.getElementById("pasporError");

     // Membuat fungsi untuk menyembunyikan pesan kesalahan nomor rekening BCA
function hideSIMError() {
    simError.textContent = "";
    simError.style.display = 'none'; // Menyembunyikan pesan kesalahan
}

function hideKTPError() {
    ktpError.textContent = "";
    ktpError.style.display = 'none'; // Menyembunyikan pesan kesalahan
}

function hidePasporError() {
    pasporError.textContent = "";
    pasporError.style.display = 'none'; // Menyembunyikan pesan kesalahan
}







    // Menambahkan event listener ke tombol radio SIM
simInput.addEventListener("change", function() {
    if (simInput.checked) {
        // Validasi nomor rekening SIM
        if (norekInput.value.length !== 14) {
            simError.textContent = "Nomor SIM harus 14 digit";
            simError.style.color = 'red'; // Mengubah warna teks menjadi merah
            simError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            simError.textContent = "Nomor SIM valid";
            simError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            simError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideKTPError();
        hidePasporError();
    }
});

// Membuat fungsi validasi SIM saat input berubah
norekInput.addEventListener("input", function() {
    if (simInput.checked) {
        // Validasi nomor rekening SIM
        if (norekInput.value.length !== 14) {
            simError.textContent = "Nomor SIM harus 14 digit";
            simError.style.color = 'red'; // Mengubah warna teks menjadi merah
            simError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            simError.textContent = "Nomor SIM valid";
            simError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            simError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideKTPError();
        hidePasporError();
    }
});









// Menambahkan event listener ke tombol radio KTP
ktpInput.addEventListener("change", function() {
    if (ktpInput.checked) {
        // Validasi nomor rekening KTP
        if (norekInput.value.length !== 16) {
            ktpError.textContent = "Nomor KTP harus 16 digit";
            ktpError.style.color = 'red'; // Mengubah warna teks menjadi merah
            ktpError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            ktpError.textContent = "Nomor KTP valid";
            ktpError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            ktpError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideSIMError();
        hidePasporError();
    }
});

// Membuat fungsi validasi KTP saat input berubah
norekInput.addEventListener("input", function() {
    if (ktpInput.checked) {
        // Validasi nomor rekening KTP
        if (norekInput.value.length !== 16) {
            ktpError.textContent = "Nomor KTP harus 16 digit";
            ktpError.style.color = 'red'; // Mengubah warna teks menjadi merah
            ktpError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            ktpError.textContent = "Nomor KTP valid";
            ktpError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            ktpError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideSIMError();
        hidePasporError();
    }
});

// Menambahkan event listener ke tombol radio Paspor
pasporInput.addEventListener("change", function() {
    if (pasporInput.checked) {
        // Validasi nomor rekening Paspor
        if (norekInput.value.length !== 16) {
            pasporError.textContent = "Nomor Paspor harus 16 digit";
            pasporError.style.color = 'red'; // Mengubah warna teks menjadi merah
            pasporError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            pasporError.textContent = "Nomor Paspor valid";
            pasporError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            pasporError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideSIMError();
        hideKTPError();
    }
});

// Membuat fungsi validasi Paspor saat input berubah
norekInput.addEventListener("input", function() {
    if (pasporInput.checked) {
        // Validasi nomor rekening Paspor
        if (norekInput.value.length !== 16) {
            pasporError.textContent = "Nomor Paspor harus 16 digit";
            pasporError.style.color = 'red'; // Mengubah warna teks menjadi merah
            pasporError.style.display = 'block'; // Menampilkan pesan kesalahan
        } else {
            pasporError.textContent = "Nomor Paspor valid";
            pasporError.style.color = 'green'; // Mengubah warna teks menjadi hijau
            pasporError.style.display = 'block'; // Menampilkan pesan kesalahan
        }

        // Memanggil fungsi untuk menyembunyikan pesan kesalahan nomor rekening lainnya
        hideSIMError();
        hideKTPError();
    }
});

});




