'use strict'

let beerModule = require("./user-beers-list-view-model");
let frameModule = require("ui/frame");
var AppSettings = require("application-settings");
var Everlive = require("../../libs/everlive/everlive.all.min");
var el = new Everlive({
	appId: 'gueeeo56lwfpwx8g',
	scheme: 'http',
    token: AppSettings.getString(TOKEN_DATA_KEY)
});
var beerIds;

function pageLoaded(args) {
	let page = args.object;
	var vm = beerModule.userBeersViewModel;
	page.bindingContext = vm;

	test(vm);

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

function test(vm) {
	el.Users.currentUser()
		.then(function (data) {
			var username = data.result.Username;
			console.log(username + " is logged in!");
			// console.log(JSON.stringify(data.result.drinkedBeers));
			beerIds = JSON.stringify(data.result.drinkedBeers);
			console.log('user beer ids' + beerIds);
			getUserBeers(data.result.drinkedBeers, vm);
		},
			function (error) {
				console.log(JSON.stringify(error));
			});
	
}

function getUserBeers(ids, vm){
	console.log("ids2 " + ids);
	var data = el.data('Beers');
	var query = new Everlive.Query();
	query.where().isin('Id', ids)
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