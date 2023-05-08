import React, { useState } from 'react';
import { Client } from 'boardgame.io/react';
import { INVALID_MOVE } from 'boardgame.io/core';
import getComponent from './component-factory';
import initialState from './game-test';

const Ludo = {
  setup: ({ G, ctx }) => {},
};

const Board = () => {
  const [state, setState] = useState(initialState);

  return (
    <div>
      {state.game.components.map(({ _id, componentInfo, type }) => {
        return getComponent(state.layout[_id], componentInfo, type);
      })}
    </div>
  );
};
const BoardGame = Client({ game: Ludo, board: Board });

export default BoardGame;
