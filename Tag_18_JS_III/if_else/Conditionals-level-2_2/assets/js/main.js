function checkAirQuality() {
  const airQuality = document.querySelector(".airQuality").value;
  document.querySelector(".airQualityLevel").innerHTML = airQuality;

  if (airQuality >= 0 && airQuality <= 50) {
    document.querySelector(".output-result").innerHTML =
      "Level of health concern:  Good";
    document.querySelector(".output-result2").innerHTML =
      "Level of health effect: Little or no risk";
    document.querySelector("body").style.backgroundColor = "green";
  } else if (airQuality > 50 && airQuality <= 100) {
    document.querySelector(".output-result").innerHTML =
      "Level of health concern:  Moderate";
    document.querySelector(".output-result2").innerHTML =
      "Level of health effect: Acceptable quality";
    document.querySelector("body").style.backgroundColor = "yellow";
  } else if (airQuality > 100) {
    document.querySelector(".output-result").innerHTML =
      "Level of health concern:  Unhealthy for sensitive groups";
    document.querySelector(".output-result").innerHTML =
      "Level of health effect: Generable publics not likely affected";
    document.querySelector("body").style.backgroundColor = "orange";
  }
}
