import React from 'react';

var imgRock = require('../resources/Rosa.png');
var imgPaper = require('../resources/Snor.png');
var imgScissor = require('../resources/Pappelsin.png');

export default function (){
  return[
    {
      id: 0,
      name: 'Rock',
      img: imgRock
    },
    {
      id: 1,
      name: 'Paper',
      img: imgPaper
    },
    {
      id: 2,
      name: 'Scissor',
      img: imgScissor
    }
  ]
}
