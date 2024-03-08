// let icon=document.querySelector("#imagehidden");
// let text=document.querySelector("#inputpass");
function myfunction() {
    var x = document.querySelector("#inputpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
