function changecolor(bodycolor) {
  let color = bodycolor.value;
  var opt = document.getElementById("col");
  opt.style.background = color;
  var opt2 = document.getElementById("h1tag");
  opt2.style = "color:white";
  var opt3 = document.getElementById("h3tag");
  opt3.style = "color:white";
}
