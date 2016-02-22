var frameModule = require("ui/frame");
var view = require("ui/core/view");
var AppSettings = require("application-settings");

exports.loaded = function (argument) {
	var page = argument.object;
	if (page.ios) {
		frameModule.Frame.defaultTransition = { name: "slide" };
	}
	page.bindingContext = { username: AppSettings.getString(USERNAME) };
}

exports.userBeers = function (argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/user-beers-list/user-beers-list");
}

exports.userWishlist = function (argument) {
	console.log('wishlist');
	var topmost = frameModule.topmost();
	topmost.navigate("views/user-wishlist/user-wishlist");
}