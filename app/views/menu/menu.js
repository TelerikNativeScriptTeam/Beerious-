var frameModule = require("ui/frame");

exports.loaded = function (argument) {
	var page = argument.object;
	if (page.ios) {
		frameModule.Frame.defaultTransition = { name: "slide" };
	}
}

exports.beersList = function (argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/list/list");
}

exports.login = function (argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/login/login");
}

exports.register = function (argument) {
	var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
}

exports.userProfile = function(argument) {
	var topmost = frameModule.topmost();
	topmost.navigate("views/user/user");

}

exports.checkin = function(argument) {
	var topmost = frameModule.topmost();
	topmost.navigate("views/check-in/check-in");
}