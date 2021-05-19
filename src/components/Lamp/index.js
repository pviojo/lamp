import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Lamp = ({ color, intensity, showIntensity }) => {
  const [showStateIntensity, setShowStateIntensity] = useState(showIntensity);
  useEffect(() => {
    setShowStateIntensity(showIntensity);
  }, [showIntensity]);
  useEffect(() => {
    setShowStateIntensity(showIntensity);
    const pid = window.setTimeout(
      () => {
        setShowStateIntensity(false);
      },
      2000,
    );
    return () => {
      window.clearTimeout(pid);
    };
  }, [intensity, color]);
  return (
    <div className={styles.lamp}>
      <div
        className={styles.inner}
        style={{
          backgroundColor: color,
          opacity: intensity / 100,
        }}
      >
        {showStateIntensity && (
        <div
          className={styles.intensity}
          style={{
            opacity: ((100 - intensity) / 100 + 0.25),
          }}
        >
          {intensity}
        </div>
        )}
      </div>
    </div>
  );
};

Lamp.defaultProps = {
  showIntensity: false,
};
Lamp.propTypes = {
  color: PropTypes.string.isRequired,
  intensity: PropTypes.number.isRequired,
  showIntensity: PropTypes.bool,
};

export default Lamp;
