// from data.js
var tableData = data;

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
