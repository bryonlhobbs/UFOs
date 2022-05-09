// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  };

function buildTable(data) {
    // clear out existing data
    tbody.html("");

    //Loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a new row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick(){
    // Get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check t osee if a date was entered and use as a filter
    if (date) {
        // Apply 'filter' to keep only qualifying rows
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild table using filtered data
    // @NOTE: If no date entered, then filtered date is original/complete data set.
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);