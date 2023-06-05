import { generateId } from '../../utils';
import initialState from '../mockDatabase';
import decorate from './component-decorator/component-decorator';
import setupMoves from './moves-generator/moves-generator';

const setupGame = (players, setup, components) => {
  return Object.entries(setup).reduce((acc, [key, value]) => {
    const component = components.find((component) => component._id === key);
    const componentInfo = { players, component, content: value };
    return {
      components: { ...acc.components, [key]: decorate(componentInfo) },
    };
  }, {});
};

const generateComponentInstances = (playerSetup) => {
  return Object.entries(playerSetup).reduce((acc, [key, value]) => {
    const componentInstances = Array(value.amount)
      .fill(null)
      .reduce((acc, _, index) => {
        const _id = generateId();
        return {
          ...acc,
          [_id]: {
            _id,
            componentId: key,
          },
        };
      }, {});
    return { ...acc, ...componentInstances };
  }, {});
};

const setupPlayers = (playerCount, playerSetup) => {
  let players = {};
  if (playerSetup.all) {
    const allPlayers = Array(playerCount)
      .fill(null)
      .reduce((acc, _, index) => {
        const instances = generateComponentInstances(playerSetup.all);
        const player = {
          id: index,
          ...instances,
        };
        return {
          ...acc,
          [index]: player,
        };
      }, {});
    players = { ...players, ...allPlayers };
  }
  return players;
};

const { setup, components } = initialState.game;
console.log('initialState', initialState);
const Game = {
  setup: ({ ctx }) => {
    const players = setupPlayers(ctx.numPlayers, setup.players);
    return {
      players,
      ...setupGame(players, setup.common, components),
    };
  },
  moves: setupMoves(components),
};

export default Game;
