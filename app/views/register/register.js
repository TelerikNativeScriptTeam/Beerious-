'use strict'
 var Everlive = require("~/libs/everlive/everlive.all.min"); 
 var everlive = new Everlive({
     appId: "gueeeo56lwfpwx8g",
     scheme: "https"
 });
 
var username;
var password;

function pageLoaded(args) {
	let page = args.object;
    username = page.getViewById("username");
    password = page.getViewById("password");
}

function register(){
    everlive.Users.register(username.text,
      password.text,
      function(data) {
         alert("Successful registration!");
      },
      function(error) {
            alert(JSON.stringify(error));
     });
}


exports.pageLoaded = pageLoaded;
exports.register = register;