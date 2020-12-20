// import the data from data.js
const tableData = data;

function buildTable(data) {
    // First, clear out any existing data
    d3.select("#tbody").html("");
  
  data.forEach((dataRow) => {
    let row = d3.select("#tbody").append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}  


function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);










// just holding here if i need it

//filter0 = d3.select("#datetime").property("value");
  //filter1 = d3.select("#city").property("value");
  //filter2 = d3.select("#state").property("value");
  //filter3 = d3.select("#country").property("value");
  //filter4 = d3.select("#shape").property("value");

  
  //filterTable(filteredData);

filteredData = tableData;
  
if (filter0 && filter1 && filter2 && filter3 && filter4) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
  filteredData = [filteredData.filter(row => row.datetime === filter0 && row.city === filter1 && row.state === filter2 && row.country === filter3 && row.shape === filter4)];

  BuildTable(filteredData);
}

else if (filter0 && filter1 && filter2 && filter3) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
  filteredData = [filteredData.filter(row => row.datetime === filter0 && row.city === filter1 && row.state === filter2 && row.country === filter3)];

  BuildTable(filteredData);
}

else if (filter0 && filter1 && filter2) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
  filteredData = [filteredData.filter(row => row.datetime === filter0 && row.city === filter1 && row.state === filter2)];

  BuildTable(filteredData);
}

else if (filter0 && filter1) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
  filteredData = [filteredData.filter(row => row.datetime === filter0 && row.city === filter1)];

  buildTable(filteredData);
}
else if (filter0) {
  // Apply `filter` to the table data to only keep the
  // rows where the `datetime` value matches the filter value
  filteredData = [filteredData.filter(row => row.datetime === filter0)];
  console.log(filteredData);
  buildTable(filteredData);
}
else {
  console.log(tableData);
  buildTable(tableData);
}
}
