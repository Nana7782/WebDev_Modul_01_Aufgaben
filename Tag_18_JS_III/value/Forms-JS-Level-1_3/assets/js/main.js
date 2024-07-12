function calcAge() {
  const outputAge1 = document.querySelector(".alter1").value;

  const outputAge2 = document.querySelector(".alter2").value;

  const formOutputFromHTML = document.querySelector(".form_output");

  formOutputFromHTML.innerHTML = `Die Differenz beträgt: ${
    outputAge1 - outputAge2
  } `;
}
