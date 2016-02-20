'use strict'
let eventModule = require("./list-view-model");
let frameModule = require("ui/frame");
var Everlive = require("../../libs/everlive/everlive.all.min");
var el = new Everlive('vpumzej7kuvt3ul5');

function pageLoaded(args) {
	let page = args.object;
	var vm = eventModule.evViewModel;
	page.bindingContext = vm;
	
    
	var data = el.data('Beers');
	var query = new Everlive.Query();
	query.where()
		.done()
		.orderDesc()
		.select("name")
		.skip(0)
		.take(10);
		

	data.get(query)
		.then(function(data) {
			
			vm.loadProblems(data.result);
			console.log(JSON.stringify(data.result));
		}, function(error) {
			console.log("ERROR!! " + JSON.stringify(error));
		});
}


exports.pageLoaded = pageLoaded;