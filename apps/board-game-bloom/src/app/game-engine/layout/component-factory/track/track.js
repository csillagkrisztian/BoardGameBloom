import { AlignedMarker } from './helpers';

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
                    spaceHeight={height}
                    spaceWidth={width}
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
