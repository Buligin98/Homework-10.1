let on = () => {
  document.getElementById("light").src = "img/On.png";
};

let off = () => {
  document.getElementById("light").src = "img/off.png";
};

let universal = () => {
  let image = document.getElementById("light").src;
  img =
    "file:///C:/Users/ads/Desktop/Daniil%20Buligini%20Homework/Homework%2010.1/img/off.png";

  if (image == img) {
    on();
  } else {
    off();
  }
};
