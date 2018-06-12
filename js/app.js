'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// constructor for building store locations
function StoreLocation(name, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  // for identifying the object by name
  this.name = name;
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
}

// method prototypes for StorLocation objects
StoreLocation.prototype.randomCustPerHr = function() {
  // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive
};

// calculates cookies sold per hour to a random number of customers
StoreLocation.prototype.calculateDailyCookies = function() {
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
StoreLocation.prototype.renderHeaderRow = function() {

  // store table element in variable
  var tableEl = document.getElementById('cookieSalesTable');

  // tr1 - create table row element for table
  var headerRow = document.createElement('tr');

  // tr2 - append table row element to table element
  tableEl.appendChild(headerRow);

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
};

var firstAndPike = new StoreLocation('First and Pike', 23, 65, 6.3);
var seaTacAirport = new StoreLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3);
var alki = new StoreLocation('Alki', 2, 16, 4.6);

console.log(firstAndPike);
console.log(seaTacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);

firstAndPike.calculateDailyCookies();
firstAndPike.renderHeaderRow();
