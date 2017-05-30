import React from 'react';
// import urlGenerator from '../logic/url-generator';
// var imgRock = require('../resources/RockWhite.jpg');
// var imgPaper = require('../resources/PaperWhite.jpg');
// var imgScissor = require('../resources/ScissorsWhite.jpg');

var RockDestroyedLeft = require('../resources/RockDestroyedLeft.jpg');
var RockDestroyedRight = require('../resources/RockDestroyedRight.jpg');
var RockDraw = require('../resources/RockDraw.jpg');
var PaperDestroyedLeft = require('../resources/PaperDestroyedLeft.jpg');
var PaperDestroyedRight = require('../resources/PaperDestroyedRight.jpg');
var PaperDraw = require('../resources/PaperDraw.jpg');
var ScisorsDestroyedLeft = require('../resources/ScisorsDestroyedLeft.jpg');
var ScissorsDestroyedRight = require('../resources/ScissorsDestroyedRight.jpg');
var ScissorsDraw = require('../resources/ScissorsDraw.jpg');

export default function (){
  // var urlArray = urlGenerator;
  // alert(JSON.stringify(urlArray));
  // alert(urlGenerator[0])
  // urlGenerator2 = new urlGenerator;
  return[
    {
      id: 0,
      name: 'RockDestroyedLeft',
      img: RockDestroyedLeft,
      url: ''
    },
    {
      id: 1,
      name: 'RockDestroyedRight',
      img: RockDestroyedRight,
      url: ''
    },
    {
      id: 2,
      name: 'RockDraw',
      img: RockDraw,
      url: ''
    },
    {
      id: 3,
      name: 'PaperDestroyedLeft',
      img: PaperDestroyedLeft,
      url: ''
    },
    {
      id: 4,
      name: 'PaperDestroyedRight',
      img: PaperDestroyedRight,
      url: ''
    },
    {
      id: 5,
      name: 'PaperDraw',
      img: PaperDraw,
      url: ''
    },
    {
      id: 6,
      name: 'ScisorsDestroyedLeft',
      img: ScisorsDestroyedLeft,
      url: ''
    },
    {
      id: 7,
      name: 'ScissorsDestroyedRight',
      img: ScissorsDestroyedRight,
      url: ''
    },
    {
      id: 8,
      name: 'ScissorsDraw',
      img: ScissorsDraw,
      url: ''
    }
  ]
}
