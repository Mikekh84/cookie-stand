var time = ['10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var cookieStand = function(place, minCustHour, maxCustHour, avgCookieCust, ulElement) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieCust = avgCookieCust;
  this.cookiesByHourList = [];
  this.ulElement = ulElement;
  this.dailyCookies = 0;

  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  };

  this.cookiesPerHour = function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  };

  this.totalCookiesDay = function(){
    this.dailyCookies = 0;
    for (var i = 0; i < time.length; i++) {
      this.cookiesByHourList.push(this.cookiesPerHour());
      this.dailyCookies = this.dailyCookies + this.cookiesByHourList[i];
    };
  };

  this.makeUL = function(time) {
    var totalC = document.getElementById(this.ulElement + 'Total');
    totalC.appendChild(document.createTextNode('The Daily Total: ' + this.dailyCookies + ' Cookies'));
           // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById(this.ulElement);
    for(var i = 0; i < time.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var locationList = document.getElementById(this.ulElement);

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(time[i] + ": " + this.cookiesByHourList[i] + ' cookies' ));
        // Add it to the list:
        locationList.appendChild(item);
    };
  };

};
var pikePlace = new cookieStand('Pike Place Market', 17, 88, 5.2, 'pike');
// var seaTac =  new cookieStand('Seatac Airport', 6, 44, 1.2);
// var southcenter = new cookieStand('Southcenter Mall', 11, 38, 1.9);
// var bellSq = new cookieStand('Bellevue Square Mall', 20, 48, 3.3);
// var alki = new cookieStand('Alki Beach', 3, 24, 2.6);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

pikePlace.totalCookiesDay();
pikePlace.makeUL(time);
// seaTac.makeUL(time);
// southcenter.makeUL(time);
// bellSq.makeUL(time);
// alki.makeUL(time);


//Use array with variable i to add each array item to get total.
// makeUL: function(time) {

//     for(var i = 0; i < time.length; i++) {

//         // connect the list to the JS; this is where your list will appear
//         var locationList = document.getElementById('pike');

//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(time[i] + ": " + this.cookiesPerHour() + ' cookies' ));
//         // Add it to the list:
//         locationList.appendChild(item);

//         // var cookieTotal = document.createElement('li');
//         // cookieTotal.appendChild(document.createTextNode(this.totalCookiesDay()));
//         // locationList.appendChild(cookietotal);
//         // return locationList;

//     };

//     // Finally, return the constructed list:
//    // return locationList;
//   }
// };




