'use strict'

var observable = require("data/observable");
var frameMode = require("ui/frame");
let observableArrayModule = require("data/observable-array");
var topmost = frameMode.topmost();

class UserBeersViewModel extends observable.Observable {
	constructor() {
		super();
		this._beers = new observableArrayModule.ObservableArray();
	}

	loadUserBeers(data) {
		this.set("beers", data);
	}
}

exports.UserBeersViewModel = UserBeersViewModel;
exports.userBeersViewModel = new UserBeersViewModel();