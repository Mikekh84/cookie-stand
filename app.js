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





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var time = ['10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

pikePlace.makeUL(time);








