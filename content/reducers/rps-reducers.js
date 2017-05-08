import React from 'react';

var imgRock = require('../resources/RockWhite.jpg');
var imgPaper = require('../resources/PaperWhite.jpg');
var imgScissor = require('../resources/ScissorsWhite.jpg');

export default function (){
  return[
    {
      id: 0,
      name: 'Rock',
      img: imgRock,
      url: 'https://rockpaperscissor.app.link/Q6Jb1oc3RC'
    },
    {
      id: 1,
      name: 'Paper',
      img: imgPaper,
      url: 'https://rockpaperscissor.app.link/RdAqYj2bSC'
    },
    {
      id: 2,
      name: 'Scissor',
      img: imgScissor,
      url: 'https://rockpaperscissor.app.link/nayj0sdcSC'
    }
  ]
}
