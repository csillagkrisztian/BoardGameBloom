
import React from "react";
import { Client } from "boardgame.io/react";
import { INVALID_MOVE } from "boardgame.io/core";

const Ludo = {
  setup: ({G,ctx}) => {},
};

const Board = () => {
  return <div></div>;
};
const BoardGame = Client({ game: Ludo, board: Board });

export default BoardGame;

