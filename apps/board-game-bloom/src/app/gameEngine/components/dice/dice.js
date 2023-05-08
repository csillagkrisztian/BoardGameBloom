import React, { useEffect, useState } from 'react';

export default function getDye(layout, component) {
  console.log('layout', layout);
  console.log('component', component);

  // min and max included
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const Dye = () => {
    const [dyeValue, setDyeValue] = useState(component.faces[0]);
    const [rolling, setRolling] = useState(false);

    console.log('rolling', rolling);

    useEffect(() => {
      console.log('useEffect', rolling);
      if (rolling) {
        setTimeout(() => {
          setRolling(false);
          setDyeValue(
            component.faces[
              randomIntFromInterval(0, component.faces.length - 1)
            ]
          );
        }, 850);
      }
    }, [rolling]);

    return (
      <div>
        {rolling ? (
          <img
            style={{ height: '50px', width: '50px' }}
            src={layout.rollingAnimation}
          ></img>
        ) : (
          <img
            style={{ height: '50px', width: '50px' }}
            src={layout.faces[dyeValue._id]}
          />
        )}
        <br></br>
        <button
          onClick={() => {
            setRolling(true);
          }}
        >
          Roll Dye
        </button>
      </div>
    );
  };

  return <Dye />;
}
