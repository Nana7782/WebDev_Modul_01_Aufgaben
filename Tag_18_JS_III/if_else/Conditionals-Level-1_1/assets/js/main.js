function adult() {
  const age = document.querySelector(".age").value;
  const outputHTML = document.querySelector(".output");

  if (age >= 18) {
    outputHTML.innerHTML = "Du bist volljährig";
  } else {
    outputHTML.innerHTML = "Du bist zu jung!";
  }
}
