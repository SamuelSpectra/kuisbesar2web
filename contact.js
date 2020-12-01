function myBtn() {
    var name = document.getElementById("funame").value;
    var phone = document.getElementById("phn").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subj").value;
    var pesan = document.getElementById("msg").value;
    var match = email.indexOf("@");
    var match2 = email.lastIndexOf(".");

    
    if (name == "" && phone == "" && email == "" && subject == "" && pesan == "") {
        Swal.fire(
            'Maaf, anda belum mengisi',
            '',
            'error',
            'OK'
        )
        return false;
    } else if (name == "") {
        Swal.fire(
            'Maaf, anda belum memasukan Full Name',
            '',
            'error',
            'OK'
        )
        return false;
    } else if (phone == "") {
        Swal.fire(
            'Maaf, anda belum memasukan Nomor HP',
            '',
            'error',
            'OK'
        )
        return false;
    } else if (email == "") {
        Swal.fire(
            'Maaf, anda belum memasukan Email',
            '',
            'error',
            'OK'
        )
        return false;
    } else if (match < 1 || match2 < match+2 || match2+2 >= email.lenght) {
        Swal.fire(
            'Penulisan Email Tidak Valid',
            'Please include "@" and "." e.x example@gmail.com',
            'error',
            'OK'
        )
        return false;
    } else if (subject == "") {
        Swal.fire(
            'Maaf, anda belum memasukan Subject Email',
            '',
            'error',
            'OK'
        )
        return false;
    } else if (pesan == "") {
        Swal.fire(
            'Maaf, anda belum memasukan Pesan',
            '',
            'error',
            'OK'
        )
        return false;
    } else {
        Swal.fire({
            title: 'Apakah anda yakin untuk mengirim pesan?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Send`,
            denyButtonText: `Don't send`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire(
                  'Selamat '+ name, 
                  'Pesan anda telah terkirim, akan segera diproses', 
                  'success'
                )
            } else if (result.isDenied) {
              Swal.fire (
                  'Pesan anda belum dikirim',
                  '',
                  'info'
                )
            }
          })
    }
} 