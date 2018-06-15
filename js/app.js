'use strict';

// array for tracking each hour that the stores are open
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// array for tracking all storeLocations created so far
var storeLocationArray = [];

// store table element in global variable
var cookieTableEl = document.getElementById('cookieSalesTable');

// constructor for building store locations
function StoreLocation(location, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  // for identifying the object by location
  this.location = location;
  // minimum customers servered per hour
  this.minCustPerHr = minCustPerHr;
  // maximum customers servered per hour
  this.maxCustPerHr = maxCustPerHr;
  // average number of cookies sold to each
  this.avgCookiePerCust = avgCookiePerCust;
  // tracks each hour's cookies purchased
  // array to store the cookies sold
  this.cookiesSoldArray = [];
  // variable for storing and returning all the cookies sold today
  this.cookiesToday = 0;
  // populate cookiesSoldArray and cookiesToday
  this.calculateDailyCookies();
  // track this new store in the array
  storeLocationArray.push(this);
}

// generates a random number of customers within the objects min/max range
StoreLocation.prototype.randomCustPerHr = function() {
  // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive
};

// calculates cookies sold per hour to a random number of customers
StoreLocation.prototype.calculateDailyCookies = function() {
  // empty out the coookiesSoldArray for re-rendering
  this.cookiesSoldArray = [];
  // for every hour, calculate how many cookies were sold
  for(var i = 0; i < storeHours.length; i++) {
    // create a random number of customers within the object's bounds
    var customersThisHour = this.randomCustPerHr();
    // multiply this object's average cookies per customer by randomly
    // generated number of customers for this hour to get the amount
    // of cookies sold this hour
    var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
    // track the cookies sold for each hour
    this.cookiesSoldArray.push(cookiesThisHour);
  }
  // add up cookies sold for all hours and store in this.cookiesToday
  for(i = 0; i < this.cookiesSoldArray.length; i++) {
    this.cookiesToday += this.cookiesSoldArray[i];
  }
};

// renders the header row for the table
StoreLocation.renderHeaderRow = function() {

  // tr1 - create table row element for table
  var headerRow = document.createElement('tr');

  // tr2 - append table row element to table element
  cookieTableEl.appendChild(headerRow);

  // create blank table data element to occupy top left cell of table
  var blankCell = document.createElement('th');
  headerRow.appendChild(blankCell);

  for(var i = 0; i < storeHours.length; i++) {
    // th1 - create table heading element
    var headingEl = document.createElement('th');
    // th2 - label the headings
    headingEl.textContent = storeHours[i];
    // th3 - append to the DOM
    headerRow.appendChild(headingEl);
  }

  // add a heading for tracking totals to the end of the row
  var totalsCell = document.createElement('th');
  totalsCell.textContent = 'Daily Total';
  headerRow.appendChild(totalsCell);
};

// renders the body row for the table
StoreLocation.prototype.renderBodyRow = function() {

  // tr1 - create table row element for table
  var bodyRow = document.createElement('tr');

  // append a row heading to the start of the row
  var rowHeading = document.createElement('th');
  rowHeading.textContent = this.location;
  bodyRow.appendChild(rowHeading);

  // tr2 - append table row element to table element
  cookieTableEl.appendChild(bodyRow);

  // loop through the cookies sold array to log each hour's cookie sales
  for(var i = 0; i < this.cookiesSoldArray.length; i++) {
    // th1 - create table data element
    var headingEl = document.createElement('td');
    // th2 - insert the data
    headingEl.textContent = this.cookiesSoldArray[i];
    // th3 - append to the DOM
    bodyRow.appendChild(headingEl);
  }

  // add a heading for tracking totals to the end
  var totalsCell = document.createElement('td');
  totalsCell.textContent = this.cookiesToday;
  bodyRow.appendChild(totalsCell);
};

StoreLocation.renderFooterRow = function() {

  // tr1 - create table row element for table
  var footerRow = document.createElement('tr');

  // tr2 - append table row element to table element
  cookieTableEl.appendChild(footerRow);

  // create row header for totals
  var totalsHeading = document.createElement('th');
  totalsHeading.textContent = 'All-Store Totals';
  footerRow.appendChild(totalsHeading);

  // variable for holding the day's cookie sales across all stores
  var dailyTotal = 0;

  // loop through each hour to gather hourly totals
  for(var i = 0; i < storeHours.length; i++) {

    // variable for storing the hour's totals
    var hourlyTotal = 0;

    // loop through each store to gether its totals for that hour
    for(var j = 0; j < storeLocationArray.length; j++) {
      hourlyTotal += storeLocationArray[j].cookiesSoldArray[i];
    }

    // add this hour's totals to the daily total
    dailyTotal += hourlyTotal;
    // th1 - create table data element to hold hourlyTotal
    var hourlyTotalEl = document.createElement('td');
    // th2 - add the hourlyTotal to the row
    hourlyTotalEl.textContent = hourlyTotal;
    // th3 - append to the DOM
    footerRow.appendChild(hourlyTotalEl);
  }

  // add a total to the end for the whole day across all stores
  var totalAllLocationsEl = document.createElement('td');
  totalAllLocationsEl.textContent = dailyTotal;
  footerRow.appendChild(totalAllLocationsEl);
};

// renders the header and the body
StoreLocation.renderTable = function() {
  // build the heading row
  StoreLocation.renderHeaderRow();
  // loop through the given array and activate each object's
  // calculate and render methods
  for(var i = 0; i < storeLocationArray.length; i++) {
    // use the object's data to render the table's body rows
    storeLocationArray[i].renderBodyRow();
  }

  StoreLocation.renderFooterRow();
};

// variable for accessing the form
var newLocationForm = document.getElementById('new-location-form');

// called when form submitted
StoreLocation.addNewLocation = function(event) {
  // override browser default such that the page will not refresh on form submit
  event.preventDefault();
  // gather the form input
  var newLocation = event.target.location.value;
  var newMinCustPerHr = parseInt(event.target.minCustPerHr.value);
  var newMaxCustPerHr = parseInt(event.target.maxCustPerHr.value);
  var newAvgCookiePerCust = parseInt(event.target.avgCookiePerCust.value);
  // use gathered data to create a new StoreLocation object
  new StoreLocation(newLocation, newMinCustPerHr, newMaxCustPerHr, newAvgCookiePerCust);

  // clear the contents of the table, then re-render
  cookieTableEl.textContent = '';
  StoreLocation.renderTable();
};

// adds an event listener to the form
newLocationForm.addEventListener('submit', StoreLocation.addNewLocation);

// create all StoreLocation objects
// var firstAndPike =
new StoreLocation('First and Pike', 23, 65, 6.3);
// var seaTacAirport =
new StoreLocation('SeaTac', 3, 24, 1.2);
// var seattleCenter =
new StoreLocation('Seattle Center', 11, 38, 3.7);
// var capitolHill =
new StoreLocation('Capitol Hill', 20, 38, 2.3);
// var alki =
new StoreLocation('Alki', 2, 16, 4.6);



// render a table to include all the objects in the array
StoreLocation.renderTable();