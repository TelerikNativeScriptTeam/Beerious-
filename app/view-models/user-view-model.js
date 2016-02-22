'use strict'
var AppSettings = require("application-settings");
var fetchModule = require("fetch");
var validator = require("email-validator");
var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var Toast = require("nativescript-toast");
var Everlive = require("~/libs/everlive/everlive.all.min");
var everlive = new Everlive({
    appId: "gueeeo56lwfpwx8g",
    scheme: "https",
    token: AppSettings.getString(TOKEN_DATA_KEY)
});

function User(info) {
    info = info || {};

    var viewModel = new Observable({
        email: info.email || '',
        password: info.password || ''
    });

    viewModel.login = function () {
        everlive.authentication.login(viewModel.email, viewModel.password, function (data) {
            var toast = Toast.makeText("Welcome back!");
            toast.show();
            AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
            AppSettings.setString(USER_ID, data.result.principal_id);
            AppSettings.setString(USERNAME, viewModel.email);
            var topmost = frameModule.topmost();
            topmost.navigate("views/menu/menu");
        }, function (err) {
            alert("Unfortunately an error occurred: " + err.message);
        });
    }

    viewModel.register = function () {
        everlive.Users.register(viewModel.email,
            viewModel.password,
            function (data) {
                AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
                AppSettings.setString(USER_ID, data.result.principal_id);
                AppSettings.setString(USERNAME, viewModel.email);
                var toast = Toast.makeText("Successfully registered");
                toast.show();
                var topmost = frameModule.topmost();
                topmost.navigate("views/menu/menu");
            },
            function (error) {
                alert(JSON.stringify(error));
            });

    }

    viewModel.currentUser = function () {
        everlive.Users.currentUser(function (data) {
            if (data.result) {
                var username = data.result.Username;
                var toast = Toast.makeText(username + " is logged in!");
                toast.show();
            } else {
                alert("Missing access token. Please log in!");
            }
        }, function (err) {
            alert(err.message + " Please log in.");
        });
    }

    viewModel.logout = function () {
        everlive.authentication.logout(function () {
            AppSettings.setString(TOKEN_DATA_KEY, 'token');
            AppSettings.setString(USER_ID, 'Anonymous')
            AppSettings.setString(USERNAME, 'Anonymous');
            var toast = Toast.makeText("Logout successful!");
            toast.show();
        }, function (err) {
            alert("Failed to logout: " + err.message);
        });
    }

    viewModel.image = function () {
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

    viewModel.isValidEmail = function () {
        console.log("inside isValidEmail");
        console.log(viewModel.email);
        return validator.validate(viewModel.email);
    };

    return viewModel;
}

module.exports = User;