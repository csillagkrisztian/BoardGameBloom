import {useEffect, useState} from 'react';
import magnet1 from './../../assets/magnet.png';
import magnet2 from './../../assets/magnetism.png';
import magnet3 from './../../assets/resources.png';

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);

  return (
    <div>
      <p>
        Mouse positioned at:{' '}
        <b>
          ({mousePosition.x}, {mousePosition.y})
        </b>
      </p>
      <button>+</button>
      <button>CLICK ME!</button>
      <img src={magnet1} style={{ width:'20px', height:'20px', position:"fixed",left:(mousePosition.x-4)+'px', top:(mousePosition.y-4)+'px'}}/>

    </div>
  );
}
