var propic = document.getElementById("propic");
propic.src = window.localStorage.getItem("propic");
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
var menu = document.getElementById("menu");
        menu.addEventListener("click", myFunction)
        function myFunction(x) {
            menu.classList.toggle("change");
          $("#sidenav").toggle()
        }
var sidenav = document.getElementById("sidenav").style.display = "none";