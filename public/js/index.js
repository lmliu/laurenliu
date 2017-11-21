var sectionBtn = document.getElementById("landing-link");

sectionBtn.onclick = function() {
  var el = document.getElementById("d4sd");
  var offset = el.getBoundingClientRect();
  TweenLite.to(window, 1, {scrollTo:offset});
}

var sectionBtn2 = document.getElementById("nav-port");

sectionBtn2.onclick = function() {
  var offset = document.getElementById("d4sd").offsetTop;
  TweenLite.to(window, 1, {scrollTo:offset});
}
