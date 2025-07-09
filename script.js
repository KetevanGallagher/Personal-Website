// Get the root element
var r = document.querySelector(':root');

// Check the browser preferred color scheme, and sets the defaultTheme based of that
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDarkMode ? "dark" : "light";
const preferredTheme = localStorage.getItem("theme");
const currentTheme = defaultTheme;

// Check if the localStorage item is set, if not set it to the default theme
if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
    if (defaultTheme == "light"){
      lightMode();
    }
    else{
      darkMode();
    }
}

// Sets the theme of the site either the preferredTheme based on localStorage
if (preferredTheme){
  if (preferredTheme == "light"){
    lightMode();
  }
  else{
    darkMode();
  }
}


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


function switchTheme(){
  if (localStorage.getItem("theme") == "dark"){
    lightMode();
  }
  else{
    darkMode();
    //lightMode();
  }
}



function darkMode() {
  localStorage.setItem("theme", "dark");
  r.style.setProperty("--accent", "#F9CA24");
  r.style.setProperty("--text", "#ffffff");
  r.style.setProperty("--background", "#222222");
  r.style.setProperty("--textInverse", "#000000");
  r.style.setProperty("--backgroundTrans", "#2222227b");
  r.style.setProperty("--sLink", "#b2b2b2");
  r.style.setProperty("--sLinkHover", "#878787");
  document.getElementById("darkLightMode").src="img/sun.svg";
  document.getElementById("wrIcon").src="https://webring.ayanali.net/img/icon.svg";
  const stars = document.querySelectorAll(".star");
  stars.forEach(function(star) {
    star.classList.add("dark");
  });

}

function lightMode() {
  localStorage.setItem("theme", "light");
  r.style.setProperty("--accent", "#030081");
  r.style.setProperty("--text", "#000000");
  r.style.setProperty("--background", "#ffffff");
  r.style.setProperty("--textInverse", "#ffffff");
  r.style.setProperty("--backgroundTrans", "#ffffff7b");
  r.style.setProperty("--sLink", "#4d4d4d");
  r.style.setProperty("--sLinkHover", "#787878");
  document.getElementById("darkLightMode").src="img/moon.svg";
  document.getElementById("wrIcon").src="https://webring.ayanali.net/img/icon-dark.svg";
  const stars = document.querySelectorAll(".star");
  stars.forEach(function(star) {
    star.classList.remove("dark");
  });

}