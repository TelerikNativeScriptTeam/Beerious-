'use strict'
var Everlive = require("~/libs/everlive/everlive.all.min");
var everlive = new Everlive({
    appId: "gueeeo56lwfpwx8g",
    scheme: "https"
});
var AppSettings = require("application-settings");
var fetchModule = require("fetch");
var validator = require("email-validator");
var Observable = require("data/observable").Observable;

function User(info) {
    info = info || {};

    var viewModel = new Observable({
        email: info.email || '',
        password: info.password || ''
    });

    viewModel.login = function () {
        everlive.authentication.login(viewModel.email, viewModel.password, function (data) {
            alert("Welcome back!");
            AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
            AppSettings.setString(USER_ID, data.result.principal_id);
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
                var topmost = frameModule.topmost();
                topmost.navigate("views/menu/menu");
            },
            function (error) {
                alert(JSON.stringify(error));
            });

    }

    viewModel.currentUser = function() {
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