"use strict";
const realtor = require('realtorca');

let opts = {
  LongitudeMin: -79.6758985519409,
  LongitudeMax: -79.6079635620117,
  LatitudeMin: 43.57601549736786,
  LatitudeMax: 43.602250137362276,
  PriceMin: 100000,
  PriceMax: 410000
};

console.log( realtor.buildUrl(opts) );
//https://www.realtor.ca/Residential/Map.aspx#LongitudeMin=-79.6758985519409&LongitudeMax=-79.6079635620117&LatitudeMin=43.57601549736786&LatitudeMax=43.602250137362276&PriceMin=100000&PriceMax=425000


realtor.post(opts)
  .then(data => {
      //json response
      let aResults = data.Results;
      for(let n = 0; n < aResults.length; n++){
          console.log(aResults[n]);
      }
  })
  .catch(err => {

  });