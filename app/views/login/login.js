'use strict'
var Everlive = require("~/libs/everlive/everlive.all.min");
var everlive = new Everlive({
    appId: "gueeeo56lwfpwx8g",
    scheme: "https"
});
var frameModule = require("ui/frame");
var AppSettings = require("application-settings");

var username;
var password;

function pageLoaded(args) {
    let page = args.object;
    username = page.getViewById("username");
    password = page.getViewById("password");
}

function test() {
    everlive.Users.currentUser(function (data) {
        if (data.result) {
            var username = data.result.Username;
            alert(username + " is logged in!");
        } else {
            alert("Missing access token. Please log in!");
        }
    }, function (err) {
        alert(err.message + " Please log in.");
    });
}

function signIn() {
    everlive.authentication.login(username.text, password.text, function (data) {
        alert("Successfully logged the user in");
        AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
        AppSettings.setString(USER_ID, data.result.principal_id);
    }, function (err) {
        alert("Unfortunately an error occurred: " + err.message);
    });
}

function logout() {
    everlive.authentication.logout(function () {
        alert("Logout successful!");
    }, function (err) {
        alert("Failed to logout: " + err.message);
    });
}

exports.pageLoaded = pageLoaded;
exports.test = test;
exports.signIn = signIn;
exports.logout = logout;