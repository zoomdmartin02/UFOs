// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// New function to build table
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );
  });
}


function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filterdData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);