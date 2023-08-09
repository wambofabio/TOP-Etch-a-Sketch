//select the body or the container where you want to append the grid
let container = document.querySelector(".container");

// Create a 16x16 grid
for (var i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.style.clear = "both"; //clear the float after each row

  for (var j = 0; j < 16; j++) {
    var div = document.createElement("div");
    div.className = "square";
    div.style.width = "50px"; // Set the width of the div
    div.style.height = "50px"; // Set the height of the div
    div.style.border = "1px solid black"; // Set the border of the div
    div.style.boxSizing = "border-box"; // Include border in div's total width and height
    div.style.float = "left"; // Float the divs left to create a grid
    row.appendChild(div); // Append the div to the container
  }
  // append the row to the container
  container.appendChild(row);
}
// Add hover effect to the div

let divHo = document.querySelectorAll(".square");
divHo.forEach((divHo) => {
  divHo.addEventListener("mouseover", () => {
    divHo.style.backgroundColor = "black";
  });
});

// Add a button that will trigger a pop up asking for the number of squares per side
// When the button is clicked, remove all the divs from the container
// Create a new grid of the specified amount of squares per side in the same total space as before
// E.g. 960px wide / 16 = 60px per square = 960px wide / 64 = 15px per square

let btn = document.createElement("button");
btn.innerHTML = "How many squares per side?";
btn.style.margin = "10px";
btn.style.padding = "10px";
btn.style.backgroundColor = "black";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.fontSize = "16px";
btn.style.fontWeight = "bold";
btn.style.fontFamily = "Arial";
btn.style.outline = "none";
btn.style.boxShadow = "0 9px #999";
btn.style.transition = "0.3s";
btn.style.display = "block";
btn.style.margin = "auto";

// Append the button to the container
container.appendChild(btn);

// Add event listener to the button
btn.addEventListener("click", () => {
  alert("How many squares per side?");
  let squares = prompt("How many squares per side?");
  //set the limit of user input to max 100
  if (squares > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  //remove all the divs from the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // Create a new grid of the specified amount of squares per side in the same total space as before
  for (var i = 0; i < squares; i++) {
    let row = document.createElement("div");
    row.style.clear = "both"; //clear the float after each row

    for (var j = 0; j < squares; j++) {
      var div = document.createElement("div");
      div.className = "square";
      //Calculate the width and height of the div
      var squareSize = 960 / squares;
      div.style.width = squareSize + "px"; // Set the width of the div
      div.style.height = squareSize + "px"; // Set the height of the div
      div.style.border = "1px solid black"; // Set the border of the div
      div.style.boxSizing = "border-box"; // Include border in div's total width and height
      div.style.float = "left"; // Float the divs left to create a grid
      row.appendChild(div); // Append the div to the container
    }
    // append the row to the container
    container.appendChild(row);
  }
  // Add hover effect to the div
  let divHo = document.querySelectorAll(".square");
  divHo.forEach((divHo) => {
    divHo.addEventListener("mouseover", () => {
      divHo.style.backgroundColor = "black";
    });
  });
});
