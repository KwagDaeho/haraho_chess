import React from "react";

function Board() {
  let posX = 0;
  let posY = 0;
  for (let i = 0; i < 10; i++) {
    posX += posX;
    for (let j = 0; j < 10; j++) {
      posY += posY;
      console.log(posX, +"," + posY);
    }
  }
}

export default Board;
