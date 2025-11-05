function createTable() {
  // Get table reference
  const table = document.getElementById("myTable");

  // Clear any previous table content
  table.innerHTML = "";

  // Prompt user for number of rows and columns
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Validate inputs (must be positive numbers)
  const numRows = parseInt(rn);
  const numCols = parseInt(cn);

  if (isNaN(numRows) || isNaN(numCols)) {
    alert("Please enter valid numeric values!");
    return;
  }

  if (numRows <= 0 || numCols <= 0) {
    alert("Number of rows and columns must be greater than 0!");
    return;
  }

  // Create table rows and columns dynamically
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow(); // create new row
    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell(); // create new cell
      cell.textContent = `Row-${i} Column-${j}`; // set cell text
    }
  }
}
