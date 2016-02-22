'use strict'

var observable = require("data/observable");
var frameMode = require("ui/frame");
let observableArrayModule = require("data/observable-array");

var topmost = frameMode.topmost();
var hardcoreBeerList = [
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        },
        { name: "Brass Lager",
          brewedBy: "Brass Castle Brewery",
          style: "Vienna-Style Lager",
          abv: "5.3%",
          ibu: "N/A",
          srm: "N/A",
          OG: "N/A",
          imgUrl: "",
          description: "No description available"
        }
    ];

class BeerViewModel extends observable.Observable {

	constructor() {
		super();
		this._beers = new observableArrayModule.ObservableArray();
		//this._beers = hardcoreBeerList;
	}

	loadBeers(data) {
		this.set("beers", data);
	}
}

exports.BeerViewModel = BeerViewModel;
exports.beViewModel = new BeerViewModel();