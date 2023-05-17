import { generateId } from '../../../utils';

const setupStartSpace = (players, { marker }) => {
  const _id = generateId();
  if (marker.playerExclusive) {
    return Object.entries(players).map(([key, _]) => ({
      _id,
      componentId: marker.componentId,
      playerId: key,
    }));
  } else {
    return {
      _id,
      componentId: marker.componentId,
    };
  }
};

const decorateTrack = ({ players, component: track, content }) => {
  const decoratedSpaces = track.spaces.map((space) => {
    if (space.startSpace) {
      return {
        ...space,
        occupied: [...setupStartSpace(players, content)],
      };
    }
    return space;
  });
  return { ...track, spaces: decoratedSpaces };
};

const decorateComponent = (componentInfo) => {
  switch (componentInfo.component.type) {
    case 'TRACK':
      return decorateTrack(componentInfo);
    default:
      return null;
  }
};

export default decorateComponent;
