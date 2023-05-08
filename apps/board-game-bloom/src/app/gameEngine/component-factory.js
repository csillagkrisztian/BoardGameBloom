import getTrack from './components/track/track';
import getDye from './components/dice/dice';

export default function getComponent(layout, componentInfo, type) {
  console.log('layout', layout);
  switch (type) {
    case 'TRACK':
      return getTrack(layout, componentInfo);
    case 'DYE':
      return getDye(layout, componentInfo);
    default:
      return null;
  }
}
