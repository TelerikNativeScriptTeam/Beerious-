var frameModule = require("ui/frame");

exports.loaded = function (argument) {
	var page = argument.object;
	if (page.ios) {
		frameModule.Frame.defaultTransition = { name: "slide" };
	}
}

exports.userBeers = function (argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/userBeersList/userBeersList");
}