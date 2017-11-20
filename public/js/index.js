var sectionBtn = document.getElementById("landing-link");

sectionBtn.onclick = function() {
  console.log("whatdup");
  TweenLite.to(window, 1, {scrollTo:{y:"#portfolio-link", offsetY:70}});
}