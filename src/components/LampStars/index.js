import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Star from '../Star';

const LampStars = ({ color, stars }) => {
  const [starsObj, setStarsObj] = useState([]);
  useEffect(() => {
    const nstars = [...Array(stars).keys()].map(() => {
      const k = Math.random() * 100 * 100;
      const x = k % 100;
      const y = Math.round(k / 100);
      return {
        x,
        y,
        size: 5 + (10 * Math.random()),
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
