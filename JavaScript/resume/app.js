document.addEventListener("DOMContentLoaded", function() {
  const x = document.querySelector("#navIcon");
  x.addEventListener("click", event => {
    var y = document.getElementById("myTopnav");
    if (y.className === "topnav") {
      y.className += " responsive";
    } else {
      y.className = "topnav";
    }
  });

  window.onscroll=function(){
      if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
          document.getElementById("back-top").style.display="block";
      }
      else{
        document.getElementById("back-top").style.display="none";
      }
  }

});
