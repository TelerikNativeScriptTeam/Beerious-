var frameModule = require("ui/frame");
var ImageModule = require("ui/image");
frameModule.Frame.defaultTransition = { name: "slideTop" };

exports.loaded = function (argument) {
	var page = argument.object;
	var image = page.getViewById("imageSplash");
	if(page.ios) {
		//image.imageSource = "res://Default";
	}
	else {
		//image.imageSource = "res://splashscreen.9";
	}
	image.animate({
		opacity: 1,
		duration: 4000
	})
	.then(function() {
		var navigationEntry = {
			moduleName: "views/menu/menu",
    		clearHistory: true
		}
		frameModule.topmost().navigate(navigationEntry);
		//("views/login/login");
	});
};