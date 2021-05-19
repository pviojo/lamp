import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const ColorSelector = ({ selected, onSelect }) => {
  const colors = [
    '#fff',
    '#fc0',
    '#f30',
    '#936',
    '#06c',
    '#0c6',
  ];
  return (
    <div className={styles.cnt}>
      {colors.map((color, i) => (
        <div
          className={`${styles.color} ${selected === color ? styles.selected : null}`}
          onClick={() => onSelect(color)}
          onKeyPress={() => onSelect(color)}
          role="button"
          aria-label={color}
          tabIndex={i}
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

ColorSelector.defaultProps = {
  selected: '#fff',
};

ColorSelector.propTypes = {
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default ColorSelector;
