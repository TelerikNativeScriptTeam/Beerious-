'use strict'
var UserViewModel = require("../../view-models/user-view-model");
var user = new UserViewModel();

function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = user;
}

function signIn() {
    if(!user.isValidEmail()) {
        alert("Enter a valid email!");
    }
    else {
       user.login();
    }
}

function test(){
    user.currentUser();
}

exports.pageLoaded = pageLoaded;
exports.signIn = signIn;
exports.test = test;