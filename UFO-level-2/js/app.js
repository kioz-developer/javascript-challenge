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