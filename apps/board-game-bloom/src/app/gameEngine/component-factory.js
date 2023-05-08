import React from 'react';

export default function getComponent(componentInfo, type) {
  function getTrack({ spaces, height, width, direction, trackType }) {
    const trackStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: direction,
      ...(direction === 'row' ? { height } : { width }),
    };

    const spaceStyle = {
      position: 'relative',
      width: `${width}px`,
      height: `${height}px`,
      border: '1px solid black',
    };

    const calculatePosition = (index, totalOccupants) => {
      const positionMatrix = [
        [{ left: '50%', top: '50%', sizeModifier: 2 }],
        [
          { left: '30%', top: '50%', sizeModifier: 2.7 },
          { left: '70%', top: '50%', sizeModifier: 2.7 },
        ],
        [
          { left: '30%', top: '70%', sizeModifier: 2.7 },
          { left: '70%', top: '70%', sizeModifier: 2.7 },
          { left: '50%', top: '30%', sizeModifier: 2.7 },
        ],
        [
          { left: '33%', top: '67%', sizeModifier: 3.2 },
          { left: '67%', top: '33%', sizeModifier: 3.2 },
          { left: '33%', top: '33%', sizeModifier: 3.2 },
          { left: '67%', top: '67%', sizeModifier: 3.2 },
        ],
      ];
      return positionMatrix[totalOccupants - 1][index];
    };

    const AlignedMarker = ({ occupant, index, totalOccupants }) => {
      const { left, top, sizeModifier } = calculatePosition(
        index,
        totalOccupants
      );
      return (
        <img
          style={{
            position: 'absolute',
            transform: 'translate(-50%,-50%)',
            height: height / sizeModifier,
            width: height / sizeModifier,
            top,
            left,
          }}
          alt={'marker'}
          src={occupant.marker}
        ></img>
      );
    };

    const TwoMeeple1 = () => (
      <img
        style={{
          position: 'absolute',
          top: '70%',
          left: '30%',
          transform: 'translate(-50%,-50%)',
          height: height / 2.6,
          width: height / 2.6,
        }}
        src={Meeple}
      ></img>
    );

    const TwoMeeple2 = () => (
      <img
        style={{
          position: 'absolute',
          top: '30%',
          left: '70%',
          transform: 'translate(-50%,-50%)',
          height: height / 2.6,
          width: height / 2.6,
        }}
        src={Meeple}
      ></img>
    );

    return (
      <div style={trackStyle}>
        {spaces.map(({ occupied, value }, index) => {
          return (
            <div style={spaceStyle}>
              {value}
              {occupied &&
                occupied.map((occupant, index, allOccupants) => {
                  return (
                    <AlignedMarker
                      occupant={occupant}
                      index={index}
                      totalOccupants={allOccupants.length}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  }

  switch (type) {
    case 'TRACK':
      return getTrack(componentInfo);

    default:
      return null;
  }
}
