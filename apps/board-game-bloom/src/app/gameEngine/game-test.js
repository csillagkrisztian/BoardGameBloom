import meeple1 from '../../assets/meeple1.png';
import meeple2 from '../../assets/meeple2.png';
import meeple3 from '../../assets/meeple3.png';
import meeple4 from '../../assets/meeple4.png';
import dyeface1 from '../../assets/dice-six-faces-one.png';
import dyeface2 from '../../assets/dice-six-faces-two.png';
import dyeface3 from '../../assets/dice-six-faces-three.png';
import dyeface4 from '../../assets/dice-six-faces-four.png';
import dyeface5 from '../../assets/dice-six-faces-five.png';
import dyeface6 from '../../assets/dice-six-faces-six.png';
import diceRoll from '../../assets/ezgif.com-gif-maker (1).gif';

export default {
  game: {
    setup: {},
    components: [
      {
        _id: 'dye8974515012',
        type: 'DYE',
        componentInfo: {
          faces: [
            { _id: 'face1215415', value: 1 },
            { _id: 'face1267615', value: 2 },
            { _id: 'face2333315', value: 3 },
            { _id: 'face1215553', value: 4 },
            { _id: 'face1287978', value: 5 },
            { _id: 'face1114556', value: 6 },
          ],
        },
      },
      {
        _id: 'track064848161654',
        type: 'TRACK',
        componentInfo: {
          spaces: [
            { value: 'start' },
            { value: 1 },
            { value: 2 },
            {
              value: 3,
              occupied: [
                {
                  player: 1,
                  marker: meeple1,
                },
              ],
            },
            {
              value: 4,
              occupied: [
                {
                  player: 2,
                  marker: meeple2,
                },
                {
                  player: 3,
                  marker: meeple3,
                },
              ],
            },
            {
              value: 5,
              occupied: [
                {
                  player: 1,
                  marker: meeple1,
                },
                {
                  player: 3,
                  marker: meeple3,
                },
                {
                  player: 4,
                  marker: meeple4,
                },
              ],
            },
            {
              value: 6,
              occupied: [
                {
                  player: 1,
                  marker: meeple1,
                },
                {
                  player: 3,
                  marker: meeple3,
                },
                {
                  player: 4,
                  marker: meeple4,
                },
                {
                  player: 2,
                  marker: meeple2,
                },
              ],
            },
            { value: 7 },
            { value: 8 },
            { value: 9 },
          ],
        },
      },
    ],
    moves: [],
  },
  layout: {
    track064848161654: {
      sections: [{}],
      spaceStyles: {
        width: 50,
        height: 50,
        direction: 'column',
      },
    },
    dye8974515012: {
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
  },
};
