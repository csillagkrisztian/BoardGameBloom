import { Route, Routes, Link } from 'react-router-dom';
import BoardGame from './gameEngine/game-engine';
import MouseMagnet from './editor/mouse-magnet';
import getComponent from './gameEngine/component-factory';

//style={{cursor:'none'}}
export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BoardGame></BoardGame>} />
        <Route path="/dndtest1" />
      </Routes>
      {/* END: routes */}
    </div>
  );
}
export default App;
