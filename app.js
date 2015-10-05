var pikePlace = {
  locations:'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookieCust: 5.2,

  randomCust: function(max,min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  },

  totalCookies: function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  },

};


