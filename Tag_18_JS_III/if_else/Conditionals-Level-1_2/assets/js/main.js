function weather() {
  const weatherNum = Number(document.querySelector(".define_weather").value);
  let outputHTML = document.querySelector(".output");

  if (weatherNum == 10 || weatherNum == 9 || weatherNum == 8) {
    outputHTML.textContent = "Das Wetter ist super";
  } else if (weatherNum == 7 || weatherNum == 6) {
    outputHTML.textContent = "Das Wetter ist gut";
  } else if (weatherNum == 5 || weatherNum == 4 || weatherNum == 3) {
    outputHTML.textContent = "Das Wetter ist okay";
  } else {
    outputHTML.textContent = "Das Wetter ist schlecht";
  }
  console.log(weatherNum);
}
