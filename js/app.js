'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  cookiesPurchased: [],
  minCustPerHr:23,
  maxCustPerHr:65,
  avgCookiePerCust: 6.3,
  totalCookies: 0,

  randomCustPerHr: function() { 
    // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive 
  },

  calculateDailyCookies: function() {
    var hour = 6;
    var flagAMPM = 'AM';
    for(var i = 0; i < 15; i++) {

      var customersThisHour = this.randomCustPerHr();
      var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
      this.cookiesPurchased.push(cookiesThisHour);

      if(flagAMPM === 'AM') {
        console.log(hour + 'am: ' + cookiesThisHour + ' cookies');
        hour += 1;
        if(hour === 12){
          flagAMPM = 'PM';
        }
      }
      if(flagAMPM === 'PM') {
        console.log(hour + 'pm: ' + cookiesThisHour + ' cookies');
        if(hour === 12) {
          hour = 1;
        } else {
          hour += 1;
        }
      }
    }
    for(i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    console.log('Total: ' + Math.floor(this.totalCookies) + ' cookies');
  },

  displayList: function() {
    this.calculateDailyCookies();
    var ulEl = document.getElementById('first-and-pike');
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
  }
};

var seaTacAirport = {
  cookiesPurchased: [],
  minCustPerHr:3,
  maxCustPerHr:24,
  avgCookiePerCust: 1.2,
  totalCookies: 0,
  randomCustPerHr: function() { 
    // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive 
  },
  calculateDailyCookies: function() {
    var hour = 6;
    var flagAMPM = 'AM';
    for(var i = 0; i < 15; i++) {

      var customersThisHour = this.randomCustPerHr();
      var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
      this.cookiesPurchased.push(cookiesThisHour);

      if(flagAMPM === 'AM') {
        console.log(hour + 'am: ' + cookiesThisHour + ' cookies');
        hour += 1;
        if(hour === 12){
          flagAMPM = 'PM';
        }
      }
      if(flagAMPM === 'PM') {
        console.log(hour + 'pm: ' + cookiesThisHour + ' cookies');
        if(hour === 12) {
          hour = 1;
        } else {
          hour += 1;
        }
      }
    }
    for(i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    console.log('Total: ' + Math.floor(this.totalCookies) + ' cookies');
  },
  displayList: function() {
    this.calculateDailyCookies();
    var ulEl = document.getElementById('seaTac');
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
  }
};

var seattleCenter = {
  cookiesPurchased: [],
  minCustPerHr:11,
  maxCustPerHr:38,
  avgCookiePerCust: 3.7,
  totalCookies: 0,
  randomCustPerHr: function() { 
    // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive 
  },
  calculateDailyCookies: function() {
    var hour = 6;
    var flagAMPM = 'AM';
    for(var i = 0; i < 15; i++) {

      var customersThisHour = this.randomCustPerHr();
      var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
      this.cookiesPurchased.push(cookiesThisHour);

      if(flagAMPM === 'AM') {
        console.log(hour + 'am: ' + cookiesThisHour + ' cookies');
        hour += 1;
        if(hour === 12){
          flagAMPM = 'PM';
        }
      }
      if(flagAMPM === 'PM') {
        console.log(hour + 'pm: ' + cookiesThisHour + ' cookies');
        if(hour === 12) {
          hour = 1;
        } else {
          hour += 1;
        }
      }
    }
    for(i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    console.log('Total: ' + Math.floor(this.totalCookies) + ' cookies');
  },
  displayList: function() {
    this.calculateDailyCookies();
    var ulEl = document.getElementById('seattle-center');
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
  },
};

var capitolHill = {
  cookiesPurchased: [],
  minCustPerHr:20,
  maxCustPerHr:38,
  avgCookiePerCust: 2.3,
  totalCookies: 0,
  randomCustPerHr: function() { 
    // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive 
  },
  calculateDailyCookies: function() {
    var hour = 6;
    var flagAMPM = 'AM';
    for(var i = 0; i < 15; i++) {

      var customersThisHour = this.randomCustPerHr();
      var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
      this.cookiesPurchased.push(cookiesThisHour);

      if(flagAMPM === 'AM') {
        console.log(hour + 'am: ' + cookiesThisHour + ' cookies');
        hour += 1;
        if(hour === 12){
          flagAMPM = 'PM';
        }
      }
      if(flagAMPM === 'PM') {
        console.log(hour + 'pm: ' + cookiesThisHour + ' cookies');
        if(hour === 12) {
          hour = 1;
        } else {
          hour += 1;
        }
      }
    }
    for(i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    console.log('Total: ' + Math.floor(this.totalCookies) + ' cookies');
  },
  displayList: function() {
    this.calculateDailyCookies();
    var ulEl = document.getElementById('capitol-hill');
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
  },
};

var alki = {
  cookiesPurchased: [],
  minCustPerHr:2,
  maxCustPerHr:16,
  avgCookiePerCust: 4.6,
  totalCookies: 0,
  randomCustPerHr: function() { 
    // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive 
  },
  calculateDailyCookies: function() {
    var hour = 6;
    var flagAMPM = 'AM';
    for(var i = 0; i < 15; i++) {

      var customersThisHour = this.randomCustPerHr();
      var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
      this.cookiesPurchased.push(cookiesThisHour);

      if(flagAMPM === 'AM') {
        console.log(hour + 'am: ' + cookiesThisHour + ' cookies');
        hour += 1;
        if(hour === 12){
          flagAMPM = 'PM';
        }
      }
      if(flagAMPM === 'PM') {
        console.log(hour + 'pm: ' + cookiesThisHour + ' cookies');
        if(hour === 12) {
          hour = 1;
        } else {
          hour += 1;
        }
      }
    }
    for(i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    console.log('Total: ' + Math.floor(this.totalCookies) + ' cookies');
  },
  displayList: function() {
    this.calculateDailyCookies();
    var ulEl = document.getElementById('alki');
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
  }
};

firstAndPike.displayList();
seaTacAirport.displayList();
seattleCenter.displayList();
capitolHill.displayList();
alki.displayList();