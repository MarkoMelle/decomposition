import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент рекламного баннера, отображает переданный контент внутри баннера.
 *
 * @param {JSX.Element} children - контент, который должен быть отображен внутри баннера.
 * @returns {JSX.Element} JSX-элемент, содержащий рекламный баннер с контентом.
 */

function AdBanner({ children }) {
  return (
    <div style={{ backgroundColor: 'red', height: '100px' }}>{children}</div>
  );
}

AdBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdBanner;
