'use strict'

var observable = require("data/observable");
var frameMode = require("ui/frame");
let observableArrayModule = require("data/observable-array");

var topmost = frameMode.topmost();


class BeerViewModel extends observable.Observable {

	constructor() {
		super();
		this._beers = new observableArrayModule.ObservableArray();
	}

	loadProblems(data) {
		this.set("beers", data);
	}
}

exports.BeerViewModel = BeerViewModel;
exports.beViewModel = new BeerViewModel();