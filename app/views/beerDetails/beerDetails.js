'use strict';

let vm = require('~/view-models/beer-details-view-model');

function pageLoaded(args) {}

function pageNavigatedTo(args) {
  let page = args.object;
  let beer = args.context;
  page.bindingContext = vm.create(beer);
}

function zoomInDescription(args) {
  args.object.fontSize += 1;
}

function zoomOutDescription(args) {
  args.object.fontSize -= 1;
}

module.exports = {
  pageLoaded,
  pageNavigatedTo,
  zoomInDescription,
  zoomOutDescription
};