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

  makeUL: function(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById('pike');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ": " + this.totalCookies() + ' cookies' ));

        // Add it to the list:
        locationList.appendChild(item);
    }

    // Finally, return the constructed list:
   // return locationList;
  }
};


var seaTac = {
  locations: 'Seatac Airport',
  minCustHour: 6,
  maxCustHour:44,
  avgCookieCust:1.2,

randomCust: function(max,min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  },

  totalCookies: function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  },


    makeUL: function(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById('seatac');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ": " + this.totalCookies() + ' cookies' ));

        // Add it to the list:
        locationList.appendChild(item);
    }

    // Finally, return the constructed list:
   // return locationList;
  }

}

var southcenter = {
  locations: 'Southcenter Mall',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookieCust: 1.9,

  randomCust: function(max,min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  },

  totalCookies: function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  },

  makeUL: function(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById('southcenter');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ": " + this.totalCookies() + ' cookies' ));

        // Add it to the list:
        locationList.appendChild(item);
    }

    // Finally, return the constructed list:
   // return locationList;
  }
};

var bellSq = {
  locations:'Bellevue Square Mall',
  minCustHour: 20,
  maxCustHour: 48,
  avgCookieCust: 3.3,

  randomCust: function(max,min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  },

  totalCookies: function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  },

  makeUL: function(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById('bellSq');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ": " + this.totalCookies() + ' cookies' ));

        // Add it to the list:
        locationList.appendChild(item);
    }

    // Finally, return the constructed list:
   // return locationList;
  }
};

var alki = {
  locations:'Alki',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookieCust: 2.6,

  randomCust: function(max,min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  },

  totalCookies: function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  },

  makeUL: function(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById('alki');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ": " + this.totalCookies() + ' cookies' ));

        // Add it to the list:
        locationList.appendChild(item);
    }

    // Finally, return the constructed list:
   // return locationList;
  }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var time = ['10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

pikePlace.makeUL(time);
seaTac.makeUL(time);
southcenter.makeUL(time);
bellSq.makeUL(time);
alki.makeUL(time);







