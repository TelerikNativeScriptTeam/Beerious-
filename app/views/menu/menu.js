var frameModule = require("ui/frame");
exports.beersList = function(argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/list/list");
}