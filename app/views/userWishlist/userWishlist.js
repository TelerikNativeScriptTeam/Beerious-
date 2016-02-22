'use strict'

let beerModule = require("./wishlist-list-view-model");
let frameModule = require("ui/frame");
var AppSettings = require("application-settings");
var Everlive = require("../../libs/everlive/everlive.all.min");
var el = new Everlive({
	appId: 'gueeeo56lwfpwx8g',
	scheme: 'http',
    token: AppSettings.getString(TOKEN_DATA_KEY)
});

function pageLoaded(args) {
	let page = args.object;
	var vm = beerModule.userBeersViewModel;
	page.bindingContext = vm;
	let id = AppSettings.getString(USER_ID);
	getUserWishlist(id, vm);
}

function onBeerTap(args) {
	let page = args.object.page;
	let vm = page.bindingContext;
	let index = args.index;
	let tappedBeer = vm.beers[index];
	let options = {
		moduleName: './views/beerDetails/beerDetails',
		context: tappedBeer
	};
	frameModule.topmost()
		.navigate(options);
	// updateBeer(tappedBeer);
}

function getUserWishlist(id, vm){
	console.log("ids2 " + id);
	var data = el.data('UserBeers');
	var query = new Everlive.Query();
	query.where()
		.eq('CreatedBy', id)
		.eq('wishlist', true)
		.done()
		.orderDesc()
		.select("name", "brewedBy", "description", "alc", "image");

	data.get(query)
		.then(function (data) {
			console.log('test2');
			vm.loadUserBeers(data.result);
			console.log(JSON.stringify(data.result));
		}, function (error) {
			console.log("ERROR!! " + JSON.stringify(error));
			console.log(error);
			console.log(data.sourceURL);
		});
}

exports.pageLoaded = pageLoaded;
exports.onBeerTap = onBeerTap;