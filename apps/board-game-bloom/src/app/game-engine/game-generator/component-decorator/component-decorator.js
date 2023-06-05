import decorateTrack from './track/track-decorator.js';
import decorateDye from './dye/dye-decorator.js';

const decorateComponent = (componentInfo) => {
  switch (componentInfo.component.type) {
    case 'TRACK':
      return decorateTrack(componentInfo);
    case 'DYE':
      return decorateDye(componentInfo);
    default:
      return null;
  }
};

export default decorateComponent;
