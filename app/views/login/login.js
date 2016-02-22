'use strict'
var UserViewModel = require("../../view-models/user-view-model");
var user = new UserViewModel();

var fileSystemModule = require("file-system");
var fileName = "userFile.json";
var file;

function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = user;

    file = fileSystemModule.knownFolders.documents().getFile(fileName);
    file.readText().then(function(content) {
        console.log('content');
        console.log(content);
        var jsonData = JSON.parse(content);
        console.log(jsonData.email);
        user.email = jsonData.email;
        user.password = jsonData.password;
    });
}

function signIn() {
    if(!user.isValidEmail()) {
        alert("Enter a valid email!");
    }
    else {
        file.writeText(JSON.stringify(user));
        user.login();
    }
}

function test(){
    user.currentUser();
}

function logout(){
    user.logout();
}

exports.pageLoaded = pageLoaded;
exports.signIn = signIn;
exports.test = test;
exports.logout = logout;