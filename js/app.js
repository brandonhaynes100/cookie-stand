'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// constructor for building store locations
function StoreLocation(nameID, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  // for identifying the element ID where this store will go in sales.html
  this.nameID = nameID;
  // minimum customers servered per hour
  this.minCustPerHr = minCustPerHr;
  // maximum customers servered per hour
  this.maxCustPerHr = maxCustPerHr;
  // average number of cookies sold to each
  this.avgCookiePerCust = avgCookiePerCust;
  // tracks each hour's cookies purchased
  // array to store the cookies sold
  this.cookiesSoldArray = [];
}

// method prototypes for StorLocation objects
StoreLocation.prototype.randomCustPerHr = function() {
  // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive
},

StoreLocation.prototype.calculateDailyCookies = function() {
  // for every hour, calculate how many cookies were sold
  for(var i = 0; i < storeHours.length; i++) {
    var cookiesToday = 0;
    // create a random number of customers within the object's bounds
    var customersThisHour = this.randomCustPerHr();
    // multiply this object's average cookies per customer by randomly
    // generated number of customers for this hour to get the amount
    // of cookies sold this hour
    var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
    // track the cookies sold for each hour
    this.cookiesSoldArray.push(cookiesThisHour);
    console.log(storeHours[i] + ': ' + cookiesThisHour + ' cookies');
  }
  for(i = 0; i < this.cookiesSoldArray.length; i++) {
    cookiesToday += this.cookiesSoldArray[i];
  }
  console.log('Total: ' + Math.floor(cookiesToday) + ' cookies');
},

StoreLocation.prototype.displayList = function() {
  this.calculateDailyCookies();
  var ulEl = document.getElementById(this.nameID);
  for(var i = 0; i < this.cookiesPurchased.length; i++) {
    // 1. create li elements
    var liEl = document.createElement('li');
    // 2. give them content
    liEl.textContent = storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
    // 3. append to the DOM
    ulEl.appendChild(liEl);
  }
  liEl.textContent = 'Total: ' + this.totalCookies + 'cookies';
  // 3. append to the DOM
  ulEl.appendChild(liEl);
};

var firstAndPike = new StoreLocation('firstAndPike', 23, 65, 6.3);

console.log(firstAndPike);