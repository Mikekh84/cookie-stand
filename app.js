var time = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

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

  this.makeTable = function(time) {
    var totalC = document.getElementById(this.ulElement);
    var cookieStand = document.getElementById(this.ulElement);

    cookieStand.appendChild(document.createTextNode(this.place)); //createsTD
    for(var i = 0; i < time.length; i++) {
    var locationList = document.getElementById(this.ulElement);
    var item = document.createElement('td');

    item.appendChild(document.createTextNode(this.cookiesByHourList[i]));
    locationList.appendChild(item);
    };//end for loop
     totalC.appendChild(document.createTextNode(this.dailyCookies));

  }; // end of makeTable
  this.totalCookiesDay(time);
  this.makeTable(time);
}; // end of object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var pikePlace = new cookieStand('Pike Place Market', 17, 88, 5.2, 'pike');
var seaTac =  new cookieStand('Seatac Airport', 6, 44, 1.2, 'seatac');
var southcenter = new cookieStand('Southcenter Mall', 11, 38, 1.9, 'southcenter');
var bellSq = new cookieStand('Bell. Square Mall', 20, 48, 3.3, 'bellSq');
var alki = new cookieStand('Alki Beach', 3, 24, 2.6, 'alki');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var storeData = function(e) {
  e.preventDefault();

  var stand = document.getElementById("stand");
  var maxCustHour = document.getElementById("maxCustHour");
  var minCustHour = document.getElementById("minCustHour");
  var avgCookieCust = document.getElementById("avgCookieCust");
  var storeID = document.getElementById("ulElement");

  if (!stand.value || !maxCustHour.value || !minCustHour.value || !avgCookieCust.value) {
    return alert('Please enter a value in each box.');
  };

  console.log(stand.value);
  console.log(maxCustHour.value);
  console.log(minCustHour.value);
  console.log(avgCookieCust.value);


  var newStand = new cookieStand(stand.value, minCustHour.value, maxCustHour.value, avgCookieCust.value, storeID.value);



// stand.value = null;
// minCustHour.value = null;
// maxCustHour.value = null;
// avgCookieCust.value = null;

}; // end store data function

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", storeData);

