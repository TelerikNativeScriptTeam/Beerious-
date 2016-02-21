//'use strict'
//var Everlive = require("~/libs/everlive/everlive.all.min");
//var everlive = new Everlive({
//    appId: "gueeeo56lwfpwx8g",
//    scheme: "https"
//});
//var AppSettings = require("application-settings");
//var frameModule = require("ui/frame");
//var username;
//var password;
//
//function pageLoaded(args) {
//    let page = args.object;
//    username = page.getViewById("username");
//    password = page.getViewById("password");
//}
//
//function register() {
//    everlive.Users.register(username.text,
//        password.text,
//        function (data) {
//            AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
//            AppSettings.setString(USER_ID, data.result.principal_id);
//            var topmost = frameModule.topmost();
//            topmost.navigate("views/menu/menu");
//        },
//        function (error) {
//            alert(JSON.stringify(error));
//        });
//}
//
//
//exports.pageLoaded = pageLoaded;
//exports.register = register;
//


'use strict'
var UserViewModel = require("../../view-models/user-view-model");
var user = new UserViewModel();

function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = user;
}

function register() {
    if(!user.isValidEmail()) {
        alert("Enter a valid email!");
    }
    else {
       user.register();
    }
}

exports.pageLoaded = pageLoaded;
exports.register = register;