// from data.js
var tableData = data;

// Getting distinct shapes from data
var shapes = tableData.map(sighting => sighting.shape);
var uniqueShapes = shapes.filter((v, i, a) => a.indexOf(v) === i);


let shapeFilter = d3.select("#shape");
shapeFilter.append("option");

// Filling shapes filter
uniqueShapes.forEach(function(shape){
    let row = shapeFilter.append("option");
    row.attr("value", shape);
    row.html(shape);
});