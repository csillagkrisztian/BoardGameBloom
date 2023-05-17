import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import BoardGame from './game-engine';
import MouseMagnet from './editor/mouse-magnet';
import getComponent from './game-engine/component-factory';

const GameRoute = (props) => {
  const [playerID, setPlayerID] = useState(null);
  if (playerID === null) {
    return (
      <div>
        Select a player ID:
        <button
          onClick={() => {
            setPlayerID(0);
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setPlayerID(1);
          }}
        >
          1
        </button>
      </div>
    );
  }

  return <BoardGame playerID={playerID}></BoardGame>;
};

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GameRoute />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}
export default App;
