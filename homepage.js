function myFunc1() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var match = email.indexOf("@");
    var match2 = email.lastIndexOf(".");
    // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email == "" && password == "") {
        swal({
          title: "Maaf, anda belum memasukan Email dan Password",
          text: "",
          icon: "error",
          button: 'OK',
      });
      return false;
    } else if (email == "") {
        swal({
            title: "Maaf, anda belum memasukan Email",
            text: "",
            icon: "error",
            button: 'OK',
        });
        return false;
    } else if (match < 1 || match2 < match+2 || match2+2 >= email.lenght) {
        swal({
            title: "Penulisan Email Tidak Valid",
            text: "Please include '@' and '.' e.x example@gmail.com ",
            icon: "error",
            button: 'OK',
        });
        return false;
    } else if (password == "") {
        swal({
            title: "Maaf, anda belum memasukan Password",
            text: "",
            icon: "error",
            button: 'OK',
        });
        return false;
    } else {
        // swal({
        //     title: "Hello",
        //     text: "Kamu Telah Berhasil Login",
        //     icon: "success",
        //     button: 'OK',
        // });
    }
  }