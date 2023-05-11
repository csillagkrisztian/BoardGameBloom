import React, { useState } from 'react';
import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { INVALID_MOVE } from 'boardgame.io/core';
import getComponent from './component-factory';
import initialState from './game-test';

const decorateTrack = (track, content) => {
  const decoratedSpaces = track.spaces.map((space) => {
    if (space.startSpace) {
      console.log('dick');
    }
  });
};

const decorateComponent = (component, content) => {
  switch (component.type) {
    case 'TRACK':
      return decorateTrack(component, content);
    default:
      return null;
  }
};

const generateCommonSetup = (commonSetup, components) => {
  const commonSetupRETURN = Object.entries(commonSetup).reduce(
    (acc, [key, value]) => {
      console.log(acc, key, value);
      const component = components.find((component) => component._id === key);
      return { ...acc, [key]: decorateComponent(component, value) };
    },
    {}
  );
  console.log('commonSetupRetur', commonSetupRETURN);
};

const generatePlayerSetup = (playerSetup) => {};

const Ludo = {
  setup: ({ ctx }) => {
    console.log(ctx);
    const generateSetup = (setup, components) => {
      const { common, player } = setup;

      return {
        ...generateCommonSetup(common, components),
        players: generatePlayerSetup({ player }),
      };
    };
    const startingState = generateSetup(
      initialState.game.setup,
      initialState.game.components
    );
    return startingState;
  },
};

const Board = ({ G, ctx }) => {
  return (
    <div>
      {initialState.game.components.map((componentInfo) => {
        return getComponent(
          initialState.layout[componentInfo._id],
          componentInfo,
          componentInfo.type
        );
      })}
    </div>
  );
};
const BoardGame = Client({ game: Ludo, board: Board, multiplayer: Local() });

const Multiplayer = () => (
  <>
    <BoardGame playerID="135136y1"></BoardGame>
    <BoardGame playerID="6616123"></BoardGame>
  </>
);
export default Multiplayer;
