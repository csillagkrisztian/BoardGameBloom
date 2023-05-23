const { Server, Origins } = require('boardgame.io/server');
const Ludo = require('../app/game-engine/game-engine');

const server = Server({
  games: [Ludo],
  origins: [Origins.LOCALHOST_IN_DEVELOPMENT],
});

server.run({
  port: 8000,
  lobbyConfig: {
    apiPort: 8080,
    apiCallback: () => {
      console.log('Running Lobby server on 8080');
    },
  },
});
