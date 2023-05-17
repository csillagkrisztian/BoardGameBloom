import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import game from './game-generator';
import layout from './layout';

const BoardGame = Client({
  game: game,
  board: layout,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

export default BoardGame;
