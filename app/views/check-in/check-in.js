var geolocation = require("nativescript-geolocation");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var moment = require('moment');

var image;
var locationString;
var timeString;

exports.loaded = function (argument) {
    var page = argument.object;
    image = page.getViewById("photo");
    locationString = page.getViewById("location");
    timeString = page.getViewById("time");
}

function makePicture() {
    console.log('test');
    cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true})
        .then(function(picture) {
            console.log("Result is an image source instance");
            image.imageSource = picture;
            timeString.text = moment().format("dddd, MMMM Do YYYY, hA");

    });
}

function enableLocationTap(args) {
	console.log("location func");
    if (!geolocation.isEnabled()) {
    	console.log("enableLocation");
        geolocation.enableLocationRequest();
    }
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            console.log("Current location is: " + loc);
        }
    }, 
    function(e){
       	console.log("Error: " + e.message);
    });
    locationString.text = "Sofia, Bulgaria";
}

function checkin(args) {
    console.log("save check in to user");
}

exports.enableLocationTap = enableLocationTap;
exports.makePicture = makePicture;
exports.checkin = checkin;