import defaultMarker from '../../../../../assets/default-marker.png';

const red =
  'invert(16%) sepia(96%) saturate(7286%) hue-rotate(7deg) brightness(103%) contrast(118%)';
const blue =
  'invert(65%) sepia(52%) saturate(7129%) hue-rotate(163deg) brightness(97%) contrast(101%)';
const green =
  'invert(45%) sepia(52%) saturate(2724%) hue-rotate(100deg) brightness(98%) contrast(108%)';
const yellow =
  'invert(91%) sepia(74%) saturate(949%) hue-rotate(358deg) brightness(109%) contrast(108%)';

const defaultColors = [red, blue, green, yellow];

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

export const AlignedMarker = ({
  spaceHeight,
  spaceWidth,
  occupant,
  index,
  totalOccupants,
}) => {
  const { left, top, sizeModifier } = calculatePosition(index, totalOccupants);

  console.log('colorMap[index]', defaultColors[index]);
  return (
    <img
      style={{
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        height: spaceHeight / sizeModifier,
        width: spaceWidth / sizeModifier,
        filter: defaultColors[occupant.playerId],
        top,
        left,
      }}
      alt={'marker'}
      src={occupant.marker || defaultMarker}
    ></img>
  );
};
