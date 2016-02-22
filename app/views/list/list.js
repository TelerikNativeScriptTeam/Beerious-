'use strict'

let beerModule = require("./list-view-model");
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
	var vm = beerModule.beViewModel;
	page.bindingContext = vm;

	var data = el.data('Beers');
	var query = new Everlive.Query();
	query.where()
		.done()
		.orderDesc()
		.select("name", "brewedBy", "description", "alc", "image", "drinked")
		.skip(0)
		.take(10);

	data.get(query)
		.then(function (data) {
			vm.loadBeers(data.result);
			console.log(JSON.stringify(data.result));
		}, function (error) {
			console.log("ERROR!! " + JSON.stringify(error));
			console.log(error);
			console.log(data.sourceURL);
		});
}


function onBeerTap(args) {
	let page = args.object.page;
	let vm = page.bindingContext;
	let index = args.index;
	let tappedBeer = vm.beers[index];
	console.log(tappedBeer);
	let options = {
		moduleName: './views/beer-details/beer-details',
		context: tappedBeer
	};
	frameModule.topmost()
		.navigate(options);
}

exports.pageLoaded = pageLoaded;
exports.onBeerTap = onBeerTap;