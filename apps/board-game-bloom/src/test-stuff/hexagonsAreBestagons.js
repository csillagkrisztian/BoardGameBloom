import React, { useState } from 'react';
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
  GridGenerator,
  HexUtils,
} from 'react-hexgrid';
import './hex.css';
import player1 from '../assets/player1.png';
import player2 from '../assets/player2.png';
import archer1 from '../assets/archer1.png';
import archer2 from '../assets/archer2.png';
import archer3 from '../assets/archer3.png';
import archer4 from '../assets/archer4.png';
import archer5 from '../assets/archer5.png';
import archer6 from '../assets/archer6.png';
import archer7 from '../assets/archer7.png';
import archer8 from '../assets/archer8.png';
import guard1 from '../assets/guard1.png';
import guard2 from '../assets/guard2.png';
import guard3 from '../assets/guard3.png';
import guard4 from '../assets/guard4.png';
import guard5 from '../assets/guard5.png';
import guard6 from '../assets/guard6.png';
import guard7 from '../assets/guard7.png';
import guard8 from '../assets/guard8.png';
import cardBack from '../assets/back.jpg';
import guardSkills from '../assets/guardSkills.png';
import archerSkills from '../assets/archerSkills.png';

const Deck = ({ cards }) => {
  const shuffleCards = (cards) => cards.sort(() => Math.random() - 0.5);
  const [deck, setDeck] = useState(shuffleCards(cards));
  const [card, setCard] = useState(deck[deck.length - 1]);

  const drawCard = () => {
    const newDeck = [...deck];
    if (!newDeck.length) {
      setDeck(shuffleCards(cards));
      setCard();
    } else {
      setCard(newDeck.pop());
      setDeck(newDeck);
    }
  };

  return (
    <div>
      <img
        onClick={() => {
          drawCard();
        }}
        style={{ width: '250px', opacity: deck.length ? 1 : 0.2 }}
        src={cardBack}
      ></img>
      <img style={{ width: '250px' }} src={card}></img>
    </div>
  );
};

export default function HexagonsBeBest() {
  const generator = GridGenerator.getGenerator('hexagon');
  const hexagons = generator.apply(this, [3]);
  const config = {
    width: 1200,
    height: 800,
    viewBox: '-50 -50 100 100',
    spacing: 1.03,
    origin: { x: 0, y: 0 },
    size: { x: 8, y: 8 },
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <div style={{ width: '250px' }}>
        Player1
        <img style={{ width: '250px' }} src={archerSkills}></img>
        <Deck
          cards={[
            archer1,
            archer2,
            archer3,
            archer4,
            archer5,
            archer6,
            archer7,
            archer8,
          ]}
        ></Deck>
      </div>
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        {/* Grid with manually inserted hexagons */}
        <Layout
          size={config.size}
          flat={true}
          spacing={1.03}
          origin={{ x: 0, y: 0 }}
        >
          {hexagons.map((hex, i) => {
            console.log('hex', HexUtils.getID(hex));
            const id = HexUtils.getID(hex);
            console.log(id === '-2,1,1' || id === '2,-1,-1');
            if (id === '-2,1,1' || id === '2,-1,-1') {
              return (
                <Hexagon id={'hex'} key={[3] + i} q={hex.q} r={hex.r} s={hex.s}>
                  <image
                    href={player1}
                    x={-1 * ((config.size.x + 4) / 2)}
                    y={-1 * ((config.size.y + 4) / 2)}
                    height={config.size.x + 4}
                    width={config.size.y + 4}
                  ></image>
                </Hexagon>
              );
            }
            return (
              <Hexagon id={'hex'} key={[3] + i} q={hex.q} r={hex.r} s={hex.s}>
                <Text style={{ fontSize: 1 }}>{HexUtils.getID(hex)}</Text>
              </Hexagon>
            );
          })}
        </Layout>
      </HexGrid>
      <div style={{ width: '250px' }}>
        Player2
        <img style={{ width: '250px' }} src={guardSkills}></img>
        <Deck
          cards={[
            guard1,
            guard2,
            guard3,
            guard4,
            guard5,
            guard6,
            guard7,
            guard8,
          ]}
        ></Deck>
      </div>
    </div>
  );
}
