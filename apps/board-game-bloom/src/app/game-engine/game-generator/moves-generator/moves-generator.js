const generateTrackMoves = (players, content) => {};

const generateMoves = ({ players, component, content }) => {
  switch (component.type) {
    case 'TRACK':
      return generateTrackMoves(players, content);
    default:
      return {};
  }
};

export default generateMoves;
