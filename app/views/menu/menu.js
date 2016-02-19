var frameModule = require("ui/frame");
frameModule.Frame.defaultTransition = { name: "slide" };

exports.beersList = function(argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/list/list");
}