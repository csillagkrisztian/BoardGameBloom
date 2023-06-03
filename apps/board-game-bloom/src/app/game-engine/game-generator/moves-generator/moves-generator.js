const defaultDyeMoves = {
  rollDye: ({ G, ctx, playerID, random }, args) => {
    const roll = random.D6();
    G.dye = roll;
  },
};
const defaultMarkerMoves = {};

const setupDefaultMoves = (components) => {
  const types = components.map((component) => component.type);
  const uniqueTypes = [...new Set(types)];

  return uniqueTypes.reduce((acc, type) => {
    switch (type) {
      case 'MARKER':
        return {
          ...acc,
          ...defaultMarkerMoves,
        };
      case 'DYE':
        return {
          ...acc,
          ...defaultDyeMoves,
        };
      default:
        return acc;
    }
  }, {});
};

const generateCustomMoves = (components) => {};

export default (components) => {
  console.log('components', components);
  return {
    ...setupDefaultMoves(components),
    ...generateCustomMoves(components),
  };
};
