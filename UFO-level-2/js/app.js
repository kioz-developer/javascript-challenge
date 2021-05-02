// from data.js
var tableData = data;

// Getting distinct values from data
let shapes = tableData.map(sighting => sighting.shape);
let states = tableData.map(sighting => sighting.state);
let uniqueShapes = shapes.filter((v, i, a) => a.indexOf(v) === i);
var uniqueState = states.filter((v, i, a) => a.indexOf(v) === i);

let shapeFilter = d3.select("#shape");

// Filling shapes filter
createOptions(uniqueShapes, shapeFilter);

// Create html options to select element
function createOptions(dataList, selectElement) {
    shapeFilter.append("option");

    dataList.forEach(function(value){
        let row = selectElement.append("option");
        row.attr("value", value);
        row.html(value);
    });
}