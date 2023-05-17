import { generateId } from '../../utils';
import initialState from '../mockDatabase';
import decorate from './component-decorator';
import generateMoves from './moves-generator';

const Game = {
  setup: ({ ctx }) => {
    const { setup, components } = initialState.game;
    const players = setupPlayers(ctx.numPlayers, setup.players);
    return { players, ...setupGame(players, setup.common, components) };
  },
};

const setupGame = (players, setup, components) => {
  return Object.entries(setup).reduce((acc, [key, value]) => {
    const component = components.find((component) => component._id === key);
    const componentInfo = { players, component, content: value };
    return {
      ...acc,
      [key]: decorate(componentInfo),
      moves: { ...acc.moves, ...generateMoves(componentInfo) },
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
export default Game;
