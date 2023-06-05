import { useEffect, useState } from 'react';
import magnet1 from './../../assets/magnet.png';
import magnet2 from './../../assets/magnetism.png';
import './test.css';

function createLine({ x: startX, y: startY }, { x: endX, y: endY }) {
  const centerX = (startX + endX) / 2;
  const centerY = (startY + endY) / 2;
  const distance = Math.sqrt(
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
  );
  const angle = (Math.atan2(startY - endY, startX - endX) * 180) / Math.PI;

  return {
    width: `${distance}px`,
    transform: `rotate(${angle}deg)`,
    top: centerY - 3,
    left: centerX - (distance / 2 + 3),
  };
}

export default function MouseClickDndTest() {
  const [startPosition, setStartPosition] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLine, setActiveLine] = useState(null);
  const [lines, setLines] = useState([]);

  const mouseIconStyle = {
    left: mousePosition.x - 4 + 'px',
    top: mousePosition.y - 4 + 'px',
  };

  const startStyle = {
    left: startPosition?.x - 10 + 'px',
    top: startPosition?.y - 10 + 'px',
  };

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });

      if (startPosition) {
        setActiveLine((state) => {
          const activeLine = createLine(startPosition, {
            x: event.clientX,
            y: event.clientY,
          });
          return { ...state, ...activeLine };
        });
      }
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [startPosition]);

  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      setStartPosition(mousePosition);
      setActiveLine((state) => {
        const activeLine = createLine(mousePosition, {
          x: event.clientX,
          y: event.clientY,
        });
        return { ...state, ...activeLine };
      });
      setLines((state) => [...state, activeLine]);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [mousePosition]);
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
      <img
        src={magnet1}
        alt={'start'}
        className="point"
        style={mouseIconStyle}
      />
      {startPosition && (
        <>
          <img src={magnet2} alt={'end'} className="point" style={startStyle} />
          <div className={'line'} style={activeLine}></div>
        </>
      )}
      {lines.length &&
        lines.map((line) => <div className={'line'} style={line}></div>)}
    </div>
  );
}
