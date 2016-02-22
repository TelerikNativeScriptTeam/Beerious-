var frameModule = require("ui/frame");
var imageModule = require("ui/image");

exports.loaded = function (argument) {
	var page = argument.object;
	//var item = page.getViewById("logo");

	if(page.ios) {
		frameModule.Frame.defaultTransition = { name: "slideTop" };
	}
	if (frameModule.topmost().ios) {
        frameModule.topmost().ios.navBarVisibility = "never";
    }
    var item = new imageModule.Image();
	item.src = "res://splashlogo";
    item.height = 150;
    item.on("loaded", function (args) {
		argument.object
			.animate({
				scale: {x: 0.6, y: 0.6},
				duration: 1500
			})
			.then(function (){
				return argument.object.animate({
					scale: { x: 7, y: 7 },
                    duration: 300
				});
			})
			.then(function () {
				return argument.object.animate({
                    opacity: 0,
                    duration: 150
                });
			})
			.then(function () {
                
                frameModule.topmost().navigate({
                    moduleName: "views/main-page/main-page",
                    animated: false
                });
            });
	});
	var grid = page.getViewById("grid");
    grid.addChild(item);
}