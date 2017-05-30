import React from 'react';
// import urlGenerator from '../logic/url-generator';
// var imgRock = require('../resources/RockWhite.jpg');
// var imgPaper = require('../resources/PaperWhite.jpg');
// var imgScissor = require('../resources/ScissorsWhite.jpg');

var test1 = require('../resources/Rosa.png');
var test2 = require('../resources/Snor.png');
var test3 = require('../resources/Pappelsin.png');
var test4 = require('../resources/Draw.png');

export default function (){
  // var urlArray = urlGenerator;
  // alert(JSON.stringify(urlArray));
  // alert(urlGenerator[0])
  // urlGenerator2 = new urlGenerator;
  return[
    {
      id: 0,
      name: 'Rock',
      img: test1,
      url: ''
    },
    {
      id: 1,
      name: 'Paper',
      img: test2,
      url: ''
    },
    {
      id: 2,
      name: 'Scissor',
      img: test3,
      url: ''
    },
    {
      id: 3,
      name: 'Draw',
      img: test4,
      url: ''
    },
    {
      id: 4,
      name: 'Paper',
      img: test2,
      url: ''
    },
    {
      id: 5,
      name: 'Scissor',
      img: test3,
      url: ''
    }
  ]
}
