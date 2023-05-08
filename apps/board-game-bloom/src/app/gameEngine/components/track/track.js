export default function getTrack(
  { spaceStyles: { height, width, direction } },
  { spaces }
) {
  const trackStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: direction,
    ...(direction === 'row' || direction === 'row-reverse'
      ? { height }
      : { width }),
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

  return (
    <div style={trackStyle}>
      {spaces.map(({ occupied, value }) => {
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
