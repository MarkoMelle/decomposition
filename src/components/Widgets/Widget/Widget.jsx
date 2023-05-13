import React from 'react';
import PropTypes from 'prop-types';

/**
 * Универсальный компонент виджета, который может отображать любой переданный контент.
 *
 * @param {string} title - заголовок виджета.
 * @param {JSX.Element} children - контент, который должен быть отображен внутри виджета.
 * @returns {JSX.Element} JSX-элемент, содержащий структуру виджета с заголовком и контентом.
 */

function Widget({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Widget;
