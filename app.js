var time = ['10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var cookieStand = function(place, minCustHour, maxCustHour, avgCookieCust) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieCust = avgCookieCust;
  this.cookiesByHourList = [];

  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
  };

  this.cookiesPerHour = function() {
    return Math.floor(this.randomCust(this.maxCustHour, this.minCustHour) * this.avgCookieCust);
  };

  this.totalCookiesDay = function(){
    for (var i = 0; i < time.length; i++) {
      dailyCookies = 0;
      this.cookiesByHourList.push(this.cookiesPerHour());
      dailyCookies = dailyCookies + this.cookiesPerHour();
      return dailyCookies;
    };
  };



};
var pikePlace = new cookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac =  new cookieStand('Seatac Airport', 6, 44, 1.2);
var southcenter = new cookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSq = new cookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new cookieStand('Alki Beach', 3, 24, 2.6);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// pikePlace.makeUL(time);
// seaTac.makeUL(time);
// southcenter.makeUL(time);
// bellSq.makeUL(time);
// alki.makeUL(time);


// //Use array with variable i to add each array item to get total.
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




