function calcAge() {
  const gebJahr = document.querySelector(".year").value;
  const berechnung = document.querySelector(".result");

  //   berechnung.innerHTML = "Du bist:" + 2024 - gebJahr + "Jahre alt";
  berechnung.innerHTML = 2024 - gebJahr;
}
