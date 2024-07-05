const myImg = document.getElementById("gallery");
console.log(myImg);

myImg.innerHTML =
  "<figure><img src='assets/img/image.jpg'><figcaption>Fig.1</figcaption></figure>";
myImg.innerHTML +=
  "<figure><img src='assets/img/image.jpg'><figcaption>Fig.2</figcaption></figure>";
myImg.innerHTML +=
  "<figure><img src='assets/img/image.jpg'><figcaption>Fig.3</figcaption></figure>";
