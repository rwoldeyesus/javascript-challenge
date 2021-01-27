// from data.js
var tableData = data;

var button = d3.select("#filter-btn")
var form = d3.select(".form-control")

// YOUR CODE HERE!
// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


function displayData(selectData) {
    
    var tbody = d3.select("tbody");
    var table = d3.select("table");
    tbody.html("");
    table.attr("class", "table table-striped");

    selectData.forEach((rowData) => {

        // Append one table row per student/grade
        var row = tbody.append("tr");
        Object.values(rowData).forEach((singleValue) => {
            row.append("td").text(singleValue)
        })
    })

};

displayData(tableData)

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    function datefilter(sitings) {
        return sitings.datetime == inputValue;
    };

    var filterData = tableData.filter(datefilter);
    displayData(filterData)
};


