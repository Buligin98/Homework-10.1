let on = () => {
  document.getElementById("light").src = "img/On.png";
};

let off = () => {
  document.getElementById("light").src = "img/off.png";
};

let universal = () => {
  console.log(document.getElementById("light").src);

  img = document.getElementById("light").src =
    "http://127.0.0.1:5500/img/off.png";

  if (img == "http://127.0.0.1:5500/img/off.png") {
    document.getElementById("light").src = "img/on.png";
  } else {
    document.getElementById("light").src = "img/off.png";
  }
};
