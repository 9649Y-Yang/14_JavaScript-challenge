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
    // Get the value property of the input element
    var inputDatetime = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();
    // Use the form input to filter the data by datetime
    console.log(inputDatetime);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
    console.log(tableData);

    // var filteredData = tableData.filter(ufoData => ufoData.datetime === inputDatetime);


    var filteredData = tableData.filter((ufoData) => {
        // By default set the match to false
        var matchDate = false;
        var matchCity = false;
        var matchState = false;
        var matchCountry = false;
        var matchShape = false;

        // If user entered a date to datetime field, check if it match the ufo data
        if (inputDatetime != '' && ufoData.datetime === inputDatetime) {
            matchDate = true;
        }
        // If the user didn't enter anything in the name field, set match to true by default
        if (inputDatetime == '') {
            matchDate = true;
        }

        // Repeat the above check for other search field
        if (inputCity != '' && ufoData.city.toLowerCase() === inputCity) {
            matchCity = true;
        }
        if (inputCity == '') {
            matchCity = true;
        }

        if (inputState != '' && ufoData.state.toLowerCase() === inputState) {
            matchState = true;
        }
        if (inputState == '') {
            matchState = true;
        }

        if (inputCountry != '' && ufoData.country.toLowerCase() === inputCountry) {
            matchCountry = true;
        }
        if (inputCountry == '') {
            matchCountry = true;
        }

        if (inputShape != '' && ufoData.shape.toLowerCase() === inputShape) {
            matchShape = true;
        }
        if (inputShape == '') {
            matchShape = true;
        }

        // Will return true if all conditions match
        return matchDate && matchCity && matchState && matchCountry && matchShape;
    });


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