function myFunction() {
     var x = document.getElementById("mobileMenu");
     if (x.style.display === "block") {
          x.style.display = "none";
          console.log("TEST1");
     } else {
          x.style.display = "block";
          console.log("TEST2");

     }
}