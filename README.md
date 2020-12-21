# UFOs
## Overview of Project 

### Technologies Involved
There are multiple technologies that come together in this project:
* HTML
* Cascading Style Sheets (CSS)
* Bootstrap CDN - a Content Delivery Network styling enhancement network of web services that enhance CSS and features Mobile and Responsive capabilities.  Also a grid system for dividing the HTML document and enhancing many of the HTML tags.
* JavaScript
* D3.js - a JavaScript library to enhance JavaScript for data-driven documents

### Technical Overview

#### Web Page, Index.html
This project was to create a new HTML document, *Index.html*,  that would house a dynamic table of data that consumers could use to research the subject of UFO sightings.  The data covers a time span of about 2 weeks in January of 2010, but there is sighting data from cities all across the United states.  The data is pulled from a JavaScript file that contains a list of dictionaries of data or JSON objects, approximately 134 objects.

The HTML document is structured with sections or divided into grids with CSS and Bootstrap styling.  Following image of the site at initial launch.

![web page](/Resources/web_page.png)

As you can see, there is a header section that flows across the entirety of the page and has a background image taken from space.

In the second area of flow from the top of the page is a grid with another title header, *UFO Sightings:  Fact or Fancy?*.  This portion of grid created by *bootstrap class attributes* which takes up about 33% of the left side of the page.  The remaining side is filled with text paragraphs.

The third aread of the page from teh top again is separated into sections by a bootstrap grid.  On the left side are five input boxes and labels that are provided for the user to input search criteria that control the data that is displayed on the right side of this grid.  In this second portion of the grid is a dynamic table that contains 7 columns of data.

#### Behind the Scenes

##### CSS
The technology driving the stying and data integration are CSS, BootStrap, JavaScript and D3js.  From the following snippet of index.html, you can see that Boodstrap and a CSS file are called in the ```<head>``` tag.

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UFO Finder</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="static/css/style.css">
</head>
```
As the document loads and is read, it is important that the styling that is present at the initial load be pulled in from the top of the document.

##### JavaScript
At the bottom of the html document, the last items in the ```<body>``` tag is the following snippet.

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script> 
    <script src="static/js/data.js"></script>
    <script src="static/js/app.js"></script>    
</body>
```
You can see here that external files are called at the bottom of the document and if there are any data loads or changes to html that occur dynamically, they are called from these files.

#### JavaScript
The JavaScript, enhanced by D3 search through the HTML tags and pull information needed in order to faciliate dynamic content.  Key snippets of java are as follows:

##### The Listener

```
d3.selectAll("input").on("change", updateFilters);
```
You can see a D3 command to select all input boxes and listen for any changes (e.g. text entered in the boxes).

##### Filters
```
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);
  
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
  
    }
    else {
      delete filters[filterId];
    }
 
    // 6. Call function to apply all filters and rebuild the table
   filterTable();
  
}
```
This function is activated by the previous code, *the listener* and it creates a number of filter variables that are printed to the developer console.

##### Looping Through the Data

```
function filterTable() {

    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    console.log(filters);
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);

} 
```
This is the workhorse of the JavaScript code that loops through the Java JSON file and determines what data to feed back to the table in the HTML file.

##### Build the Table

```
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
```
This function takes the filtered data from the previous funcitons and paints the HTML file table with each line of data based on the criteria in the search input boxes.

## Results:  How To Use the Web Page
The page loads with 100% of all data (UFO sightings) loaded on the page.  Anytime there are no filters specified, the table will rebuild with 100% of the data, 134 sightings.

If you would like to see all sightings in a city, insert that city in the appropriate filter.  Following image indicates a search of all sightings in Cleveland:

![cleveland Sightings](/Resources/web_page-cleveland.png)

Maybe you'd like to see all the sightings in Texas:

![Texas Sightings](/Resources/web_page-texas.png)

Last, perhaps you'd like to see all sightings where the object takes a specific shape.  Let's look for circle shaped sightings:

![Circle Sightings](/Resources/web_page-circle.png)

## Summary: 
This design has many great features, but some drawbacks too.

### Drawbacks to this Design
#### Case Sensitivity
The development and design does not account for user entry of filters in anything but lower case.  Earlier we looked for sightings in *"cleveland"*.  If we look for *"Cleveland"* we won't find any data:

!["Cleveland" Sightings](/Resources/web_page_Cleveland.png)

#### Country Filter
Another drawback is that all data objects in the JSON file are in the *"us"* so it is really a filter that doesn't add any value.

### Recommendations
I would make the following recommendations:
1. I would either put in some data validation to tell the user when input rules are violated or build in the logic to handle different case variations.
2. I would align the grids so that the table aligns better with the paragraph above.
3. I would insert a picture or something to fill the empty space under the *"UFO Sightings:  Fact or Fancy?"* heading.  Perhaps a picture of a sighting.
4. I would also insert links to images or video of sightings if available in the table so that someone could click on an image of the sighting if it is available.
5. I would create a button or link to URLs of articles for each sighting.  

Many of these suggestions require data that is not available in the JSON file.  And on that note, I would also say, storing this information in a database would be more efficient to store the items recommended.
