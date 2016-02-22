'use strict';

var Observable = require("data/observable")
  .Observable;

class BeerDetailsViewModel extends Observable {
  constructor(beer) {
    super();
    this.set('image', beer.image);
    this.set('name', beer.name);
    this.set('brewedBy', beer.brewedBy);
    this.set('alc', beer.alc);
   // this.set('description', beer.description);
    this.set('drinked', beer.drinked);
    console.log(beer.image);
  }
}

module.exports = {
  create: function (beer) {
    return new BeerDetailsViewModel(beer);
  }
};