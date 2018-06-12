'use strict';

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
};


firstAndPike.calculateDailyCookies();
seaTacAirport.calculateDailyCookies();
seattleCenter.calculateDailyCookies();
capitolHill.calculateDailyCookies();
alki.calculateDailyCookies();