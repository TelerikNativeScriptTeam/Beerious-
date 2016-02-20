var vmModule = require("../../view-models/beer-list-view-model");
var page;

function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vmModule.beerListViewModel;
};

exports.pageLoaded = pageLoaded;
exports.onItemTap = vmModule.beerListViewModel.onItemTap;