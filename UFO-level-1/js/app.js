// from data.js
var tableData = data;

let tbody = d3.select("tbody");
let filterBtn = d3.select("#filter-btn");

// Filter button click event handler
filterBtn.on("click", function() {
    d3.event.preventDefault();

    // Filter data by entered date
    let datetime = d3.select("#datetime").property("value");
    filterData = tableData.filter(sighting => sighting.datetime == datetime);

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
