import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Star from '../Star';

const LampStars = ({ color, stars }) => {
  const [starsObj, setStarsObj] = useState([]);
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cols = Math.round(Math.sqrt(stars) * (w / h));
    const rows = Math.round(Math.sqrt(stars) * (h / w));
    const nstars = [...Array(cols * rows).keys()].map((i) => {
      const x = ((i % cols) + (Math.random() * 0.5 - 0.25)) * (100 / cols);
      const y = (Math.floor(i / cols) + (Math.random() * 0.5 - 0.25)) * (100 / rows);
      return {
        x,
        y,
        size: 1 + (15 * Math.random()),
        angle: Math.random() * 360,
      };
    });
    setStarsObj(nstars);
  }, [stars]);
  return (
    <div className={styles.lamp}>
      <div
        className={styles.stars}
      >
        {starsObj.map((star) => (
          <Star
            color={color}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}`,
              height: `${star.size}`,
              transform: `rotate(${star.angle}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

LampStars.defaultProps = {
  stars: 200,
};

LampStars.propTypes = {
  color: PropTypes.string.isRequired,
  stars: PropTypes.number,
};

export default LampStars;
