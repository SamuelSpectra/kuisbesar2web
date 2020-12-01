function submitbtn() {
    var name = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var conf = document.getElementById('confirm').value;
    var match = email.indexOf("@");
    var match2 = email.lastIndexOf(".");
    var check = document.getElementById('gridCheck').checked;

    
    if (name == "" && email == "" && pass == "" && conf == "") {
            swal({
                title: "Maaf, Full Name, Email, Password, dan Confirm Password belum dimasukan",
                text: "",
                icon: "error",
                button: 'OK',
            });
            return false;
        } else if (name == "") {
            swal({
                title: "Maaf, anda belum mengisi Full Name",
                text: "",
                icon: "error",
                button: 'OK',
            });
            return false;
        } else if (email == "") {
            swal({
                title: "Maaf, anda belum mengisi Email",
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
        } else if (pass == "") {
            swal({
                title: "Maaf, anda belum mengisi Password",
                text: "",
                icon: "error",
                button: 'OK',
            });
            return false;
        } else if (conf == "") {
            swal({
                title: "Maaf, konfirmasi Password belum diisi",
                text: "",
                icon: "error",
                button: 'OK',
            });
            return false;
          }
      
    if (check == false) {
        swal({
          title: "Maaf, Silahkan agree all statements in Terms of service",
          text: "",
          icon: "info",
          button: 'OK',
        });
        return false;
    } else {
        return true;
    }
}