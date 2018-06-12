'use strict';

var firstAndPike = {
  cookiesPurchased: [],
  minCustPerHr:23,
  maxCustPerHr:65,
  avgCookiePerCust: 6.3,
  randomCustPerHr: function() { 
    // this formula for a random inclusive range was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr; //The maximum is inclusive and the minimum is inclusive 
  },
  calculateDailyCookies: function() {
    var hour = 6;
    var flagAMPM = 'AM';
    var totalCookies = 0;
    for(var i = 0; i < 15; i++) {

      var customersThisHour = this.randomCustPerHr();
      var cookiesThisHour = Math.floor(customersThisHour * this.avgCookiePerCust);
      totalCookies += cookiesThisHour;

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
    console.log('Total: ' + Math.floor(totalCookies) + ' cookies');
  },
};


firstAndPike.calculateDailyCookies();