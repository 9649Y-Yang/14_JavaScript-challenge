// from data.js
var tableData = data;
//console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// appends a table to your web page and then adds new rows of data for each UFO sighting.
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// listen for events and search through the date/time column to find rows that match user input.

// Select button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// The event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Use the form input to filter the data by datetime
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);

    console.log(filteredData);
    // select tbody to replace new table based on filter
    var tbody = d3.select("tbody");
    // clear original data
    tbody.html("");
    // appends a table to your web page and then adds new rows of data for each filtered UFO sighting.
    filteredData.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};