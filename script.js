// Get the root element
var r = document.querySelector(':root');

// Check the browser preferred color scheme, and sets the defaultTheme based of that
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDarkMode ? "dark" : "light";
const preferredTheme = localStorage.getItem("theme");
const currentTheme = defaultTheme;

var moonPhase = "img/moonPhases/fullMoon.svg";
var today = new Date();
moonPhase = imgFromPhase(getMoonPhase(today.getFullYear(), today.getMonth(), today.getDate()));
localStorage.setItem("moonPhase", moonPhase);



// Check if the localStorage item is set, if not set it to the default theme
if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
    if (defaultTheme == "light"){
      lightMode(moonPhase);
    }
    else{
      darkMode();
    }
}

// Sets the theme of the site either the preferredTheme based on localStorage
if (preferredTheme){
  if (preferredTheme == "light"){
    lightMode(moonPhase);
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
    lightMode(localStorage.getItem("moonPhase"));
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
  document.getElementById("wrIcon").src="https://webring.skule.ca/img/icon.svg";
  const stars = document.querySelectorAll(".star");
  stars.forEach(function(star) {
    star.classList.add("dark");
  });

}

function lightMode(moonImg) {
  localStorage.setItem("theme", "light");
  r.style.setProperty("--accent", "#030081");
  r.style.setProperty("--text", "#000000");
  r.style.setProperty("--background", "#ffffff");
  r.style.setProperty("--textInverse", "#ffffff");
  r.style.setProperty("--backgroundTrans", "#ffffff7b");
  r.style.setProperty("--sLink", "#4d4d4d");
  r.style.setProperty("--sLinkHover", "#787878");
  document.getElementById("darkLightMode").src=moonImg;
  document.getElementById("wrIcon").src="https://webring.skule.ca/img/icon-dark.svg";
  const stars = document.querySelectorAll(".star");
  stars.forEach(function(star) {
    star.classList.remove("dark");
  });

}

function getMoonPhase(year, month, day) {
  console.log(year);
  console.log(month);
  console.log(day);
    var c = e = jd = b = 0;

    if (month < 3) {
    year--;
    month += 12;
    }
    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; 
    jd /= 29.5305882; 
    b = parseInt(jd);
    jd -= b; 
    b = Math.round(jd * 8); 
    if (b >= 8 ) {
        b = 0; 
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    return b;
}

function imgFromPhase(phaseNum){
  if (phaseNum == 0){
    return "img/moonPhases/newMoon.svg"
  }
  if (phaseNum == 1){
    return "img/moonPhases/waxingCrescent.svg"
  }
  if (phaseNum == 2){
    return "img/moonPhases/quarter.svg"
  }
  if (phaseNum == 3){
    return "img/moonPhases/waxingGibbous.svg"
  }
  if (phaseNum == 4){
    return "img/moonPhases/fullMoon.svg"
  }
  if (phaseNum == 5){
    return "img/moonPhases/waningGibbous.svg"
  }
  if (phaseNum == 6){
    return "img/moonPhases/lastQuarter.svg"
  }
  if (phaseNum == 7){
    return "img/moonPhases/waningCrescent.svg"
  }
}