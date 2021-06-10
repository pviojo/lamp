import React, { useState } from 'react';

import Lamp from '../Lamp';
// import LampStars from '../LampStars';
import ColorSelector from '../ColorSelector';

import styles from './index.module.css';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [intensity, setIntensity] = useState(25);
  const onSelectColor = (c) => {
    setSelectedColor(c);
  };
  const changeIntensity = (i) => {
    setIntensity(
      i <= 100
        ? i
        : i % 100,
    );
  };
  return (
    <div className={styles.cnt}>
      <div
        className={styles.lamp}
        onClick={
          (e) => {
            const i = Math.min(
              100 - Math.round(
                ((e.clientY - 50) / (window.innerHeight * 0.8)) * 100,
              ), 100,
            );
            changeIntensity(i);
          }
        }
        onKeyPress={() => changeIntensity(intensity + 25)}
        tabIndex={0}
        role="button"
      >
        <Lamp color={selectedColor} intensity={intensity} showIntensity />
      </div>
      <div className={styles.selector}>
        <ColorSelector onSelect={onSelectColor} selected={selectedColor} />
      </div>
    </div>
  );
};

export default App;
