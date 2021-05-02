// from data.js
var tableData = data;

// Getting distinct values from data
let states = tableData.map(sighting => sighting.state);
let countries = tableData.map(sighting => sighting.country);
let shapes = tableData.map(sighting => sighting.shape);
let uniqueCountries = countries.filter((v, i, a) => a.indexOf(v) === i);
let uniqueStates = states.filter((v, i, a) => a.indexOf(v) === i);
let uniqueShapes = shapes.filter((v, i, a) => a.indexOf(v) === i);

// Creating html options to filters
let stateFilter = d3.select("#state");
let countryFilter = d3.select("#country");
let shapeFilter = d3.select("#shape");

createOptions(uniqueStates, stateFilter);
createOptions(uniqueCountries, countryFilter);
createOptions(uniqueShapes, shapeFilter);

// Create html options to select element
function createOptions(dataList, selectElement) {
    selectElement.append("option");

    dataList.forEach(function(value){
        let row = selectElement.append("option");
        row.attr("value", value);
        row.html(value);
    });
}

let tbody = d3.select("tbody");
let filterBtn = d3.select("#filter-btn");

// Filter button click event handler
filterBtn.on("click", function() {
    d3.event.preventDefault();

    // Filter data by entered date
    let datetime = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    filterData = tableData.filter(function(sighting) {
        if (sighting.state == state)
            return sighting;
    });

    // Clear table
    tbody.html("");

    // Fill table
    filterData.forEach(function(sighting){
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});