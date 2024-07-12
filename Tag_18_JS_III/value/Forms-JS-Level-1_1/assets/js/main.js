function double() {
  const number = document.querySelector(".zahl").value;
  const outputFromHTML = document.querySelector(".output");

  outputFromHTML.innerHTML = number * 2;
}
