const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchbox"),
      siderbarOpen= document.querySelector(".siderbarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      // js code dark and light

      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active"); 
        body.classList.toggle("dark"); 
      })
      

      // js code sidebar
      siderbarOpen.addEventListener("click" , () => {
        nav.classList.add("active");
      })






      var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// map
function initMap(){
  var options= {
    zoom:20,
    center:{lat:9.687446,lng:80.027088}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}