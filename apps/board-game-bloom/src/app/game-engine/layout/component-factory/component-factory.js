import getTrack from './track/track';
import getDye from './dice/dice';

export default function getComponent(layout, componentInfo, type) {
  switch (type) {
    case 'TRACK':
      return getTrack(layout, componentInfo);
    case 'DYE':
      return getDye(layout, componentInfo);
    default:
      return null;
  }
}