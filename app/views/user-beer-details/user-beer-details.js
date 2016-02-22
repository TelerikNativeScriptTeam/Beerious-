'use strict';
let vm = require('~/view-models/beer-details-view-model');
var frameModule = require("ui/frame");
var Toast = require("nativescript-toast");
var AppSettings = require("application-settings");
var Everlive = require("../../libs/everlive/everlive.all.min");
var el = new Everlive({
  appId: 'gueeeo56lwfpwx8g',
  scheme: 'http',
  token: AppSettings.getString(TOKEN_DATA_KEY)
});
let beer;

function pageLoaded(args) { }

function pageNavigatedTo(args) {
  let page = args.object;
  beer = args.context;
  page.bindingContext = vm.create(beer);
}


function deleteBeer(args) {
  var data = el.data('UserBeers');
  data.destroySingle({ Id: beer.Id },
    function () {
      var toast = Toast.makeText("Beer removed from the list");
      toast.show();
    },
    function (error) {
      alert(JSON.stringify(error));
    });
}

module.exports = {
  pageLoaded,
  pageNavigatedTo,
  deleteBeer
};