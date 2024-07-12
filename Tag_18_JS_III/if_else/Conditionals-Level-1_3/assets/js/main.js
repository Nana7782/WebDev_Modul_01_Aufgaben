function adult() {
  //! VSCODE sagt event ist veraltet
  event.preventDefault();
  const age = document.querySelector(".age").value;
  const outputHTML = document.querySelector(".output");

  if (age >= 18) {
    outputHTML.innerHTML = "Ja, du darfst Shisha rauchen";
  } else {
    outputHTML.innerHTML = "Nein, du darfst nicht Shisha rauchen";
  }
}
