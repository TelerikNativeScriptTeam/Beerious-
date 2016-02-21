var frameModule = require("ui/frame");
var ImageModule = require("ui/image");

exports.loaded = function (argument) {
	var page = argument.object;
	var image = page.getViewById("imageSplash");

	if(page.ios) {
		frameModule.Frame.defaultTransition = { name: "slideTop" };
		image.src = "res://Default.png";
	}
	else {
		image.src = "res://splashscreen.9.png"
	}

	image.animate({
		opacity: 1,
		duration: 3000
	})
	.then(function() {
		var navigationEntry = {
			moduleName: "views/menu/menu",
    		backstackVisible: false
		}
		frameModule.topmost().navigate(navigationEntry);
		//("views/login/login");
	});	
};