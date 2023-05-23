import dyeface1 from '../../assets/dye-face-1.png';
import dyeface2 from '../../assets/dye-face-2.png';
import dyeface3 from '../../assets/dye-face-3.png';
import dyeface4 from '../../assets/dye-face-4.png';
import dyeface5 from '../../assets/dye-face-5.png';
import dyeface6 from '../../assets/dye-face-6.png';
import diceRoll from '../../assets/dice-roll.gif';

export default {
  game: {
    setup: {
      common: {
        dye8974515012: {},
        track064848161654: {
          marker: {
            componentId: 'marker48565744',
            playerExclusive: true,
          },
        },
      },
      players: {
        all: {
          marker48565744: {
            amount: 3,
          },
        },
      },
    },
    components: [
      {
        _id: 'dye8974515012',
        type: 'DYE',
        faces: [
          { _id: 'face1215415', value: 1 },
          { _id: 'face1267615', value: 2 },
          { _id: 'face2333315', value: 3 },
          { _id: 'face1215553', value: 4 },
          { _id: 'face1287978', value: 5 },
          { _id: 'face1114556', value: 6 },
        ],
      },
      {
        _id: 'track064848161654',
        type: 'TRACK',
        spaces: [
          { _id: 'space61231256', value: 'start', startSpace: true },
          { _id: 'space62231256', value: 1 },
          { _id: 'space63231256', value: 2 },
          { _id: 'space64231256', value: 3 },
          { _id: 'space65231256', value: 4 },
          { _id: 'space66231256', value: 5 },
          { _id: 'space67231256', value: 6 },
          { _id: 'space68231256', value: 7 },
          { _id: 'space69231256', value: 8 },
          { _id: 'space610231256', value: 9 },
          { _id: 'space610231257', value: 10 },
          { _id: 'space610231257', value: 'finish' },
        ],
      },
      {
        _id: 'marker48565744',
        type: 'MARKER',
      },
    ],
    moves: [],
  },
  layout: [
    {
      _id: 'dye1',
      componentId: 'track064848161654',
      trackStyles: {},
      sections: [{}],
      spaceStyles: {
        width: 50,
        height: 50,
        direction: 'column',
      },
    },
    {
      _id: 'track1',
      componentId: 'dye8974515012',
      faces: {
        face1215415: dyeface1,
        face1267615: dyeface2,
        face2333315: dyeface3,
        face1215553: dyeface4,
        face1287978: dyeface5,
        face1114556: dyeface6,
      },
      rollingAnimation: diceRoll,
    },
    {
      _id: 'marker1',
      componentId: 'marker48565744',
      custom: true,
      default: [],
    },
  ],
};
