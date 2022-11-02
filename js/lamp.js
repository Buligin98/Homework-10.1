const universal = () => {
  let img = document.getElementById("light").src;

  if (
    img ==
    "file:///C:/Users/ads/Desktop/Daniil%20Buligini%20Homework/Homework%2010.1/img/off.png"
  ) {
    document.getElementById("light").src = "img/On.png";
  } else {
    document.getElementById("light").src = "img/off.png";
  }
};
