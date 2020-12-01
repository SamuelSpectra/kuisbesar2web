function btndelete(){
  Swal.fire({
            title: 'Are you sure ?',
            text: "Please make sure that you are doing this with your own sense and not under any circumstances",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff0000',
            cancelButtonColor: '#d0066ff',
            confirmButtonText: 'DELETE'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your account has been deleted, Good Bye!',
                    'success'
                )
            }
        })
}
function btnlogout(){
  Swal.fire({
            title: 'Are you sure ?',
            text: "Please make sure that you're not making any transactions on the way, because it can make data loss and threatening your account",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff0000',
            cancelButtonColor: '#d0066ff',
            confirmButtonText: 'LOGOUT'
        }).then((result) => {
            if (result.value) {
              window.location.href = "index.html";
            }
        })
}

function btnadd(){
  var namex = document.getElementById('namess').value;
  var cv = document.getElementById('cvc').value;
  var cnn = document.getElementById('cn').value;
  var thn = document.getElementById('year').value;
  var bln = document.getElementById('month').value;
  if (namex=="") {
    alert("Name cannot be empty!");
    return false;
  }
  if (cv=="") {
    alert("card cvc/cvv cannot be empty!")
    return false;
  }
  if (cnn=="") {
    alert("card number cannot be empty!")
    return false;
  }
  if (thn=="") {
    alert("card expiration year cannot be empty!")
    return false;
  }
  if (bln=="") {
    alert("card expiration month cannot be empty!")
    return false;
  }
  else {
    Swal.fire({
              title: 'Card Registration',
              text: "Please make sure that the data you entered is right",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#ff0000',
              cancelButtonColor: '#d0066ff',
              confirmButtonText: 'Yes I am sure'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'name : ' + namex,
                'card number : ' + cnn,
                'cvc : ' + cv,
                'year : ' + thn,
                'month : ' + bln
              )
            }
          }
        )
  }
}
function btninput(){

}
function lhtpas(){
  var x = document.getElementById("changePass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
