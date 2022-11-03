let on = () => {
  document.getElementById("light").src = "img/On.png";
  document.getElementById("universal").innerHTML = "Off";
  document.getElementById("universal").style.backgroundColor = "#ff0000";
};

let off = () => {
  document.getElementById("light").src = "img/off.png";
  document.getElementById("universal").innerHTML = "On";
  document.getElementById("universal").style.backgroundColor = "#3ff707";
};
