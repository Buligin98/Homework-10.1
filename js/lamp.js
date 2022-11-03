const universal = () => {
  let img = document.getElementById("light").src;

  if (
    img ==
    "file:///C:/Users/ads/Desktop/Daniil%20Buligini%20Homework/Homework%2010.1/img/off.png"
  ) {
    document.getElementById("light").src = "img/On.png";
    document.getElementById("universal").innerHTML = "Off";
    document.getElementById("universal").style.backgroundColor = "#ff0000";
  } else {
    document.getElementById("light").src = "img/off.png";
    document.getElementById("universal").innerHTML = "On";
    document.getElementById("universal").style.backgroundColor = "#3ff707";
  }
};
