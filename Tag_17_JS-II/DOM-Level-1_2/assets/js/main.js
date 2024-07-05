const myH1 = document.getElementById("info");
myH1.innerHTML = "<h1> Hello World</h1>";
myH1.innerHTML += "<h2>How are you?</h2>";
console.log(myH1);

// document.write("<div id='container'></div>");
// const newContainer = document.getElementById("container");
// newContainer.innerHTML = "<p>start of element</p>";

const newDiv = document.getElementById("container");
newDiv.innerHTML = "<p>start of element</p>";

document.write("<p>end of element</p>");
