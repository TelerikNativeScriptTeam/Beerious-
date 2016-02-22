'use strict';
var moment = require('moment');
var Observable = require("data/observable")
  .Observable;

class BeerDetailsViewModel extends Observable {
  constructor(beer) {
    super();
    this.set('image', beer.image);
    this.set('name', beer.name);
    this.set('brewedBy', beer.brewedBy);
    this.set('alc', beer.alc);
    this.set('drinked', beer.drinked);
    this.set('CreatedAt', moment(beer.CreatedAt).format('DD MMM YYYY HH:mm'));
  }
}

module.exports = {
  create: function (beer) {
    return new BeerDetailsViewModel(beer);
  }
};