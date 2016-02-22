'use strict';
let vm = require('~/view-models/beer-details-view-model');
var frameModule = require("ui/frame");
var AppSettings = require("application-settings");
var Toast = require("nativescript-toast");
var Everlive = require("../../libs/everlive/everlive.all.min");
var el = new Everlive({
  appId: 'gueeeo56lwfpwx8g',
  scheme: 'http',
  token: AppSettings.getString(TOKEN_DATA_KEY)
});
let beer;

function pageLoaded(args) { }

function pageNavigatedTo(args) {
  let page = args.object;
  beer = args.context;
  page.bindingContext = vm.create(beer);
}


function addToWishlist(args) {
  var data = el.data('UserBeers');
  data.create({'name': beer.name, 'brewedBy': beer.brewedBy, 'alc': beer.alc, 'image': beer.image, 'description': beer.description, 'wishlist': true},
    function (data) {
      var toast = Toast.makeText("Successfully added to wishlist!");
      toast.show();
    },
    function (error) {
      alert(JSON.stringify(error));
    });
}

function addToDrinked(args) {
  var data = el.data('UserBeers');
  data.create({'name': beer.name, 'brewedBy': beer.brewedBy, 'alc': beer.alc, 'image': beer.image, 'description': beer.description, 'wishlist': false},
    function (data) {
      var toast = Toast.makeText("Successfully added to drinked list!");
      toast.show();
      updateBeer(beer);
    },
    function (error) {
      alert(JSON.stringify(error));
    });
}

function updateBeer(beer) {
	console.log(beer.drinked);
	var data = el.data('Beers');
	data.updateSingle({ Id: beer.Id, 'drinked': beer.drinked += 1 }, function (data) {
		console.log("UPDATEDsadsad ");
	}, function (err) {
		console.log("UPDATED yyyyyy");
	});
}

module.exports = {
  pageLoaded,
  pageNavigatedTo,
  addToWishlist,
  addToDrinked
};