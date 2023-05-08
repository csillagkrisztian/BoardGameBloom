import meeple1 from '../../../assets/meeple1.png';
import meeple2 from '../../../assets/meeple2.png';
import meeple3 from '../../../assets/meeple3.png';
import meeple4 from '../../../assets/meeple4.png';

export default {
  width: 50,
  height: 50,
  spaces: [
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
  direction: 'column',
};
