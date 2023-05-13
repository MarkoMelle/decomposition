/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент для отображения курсов валют. Отображает курсы валют, переданные через свойства.
 *
 * @param {Array} exchange - массив объектов с информацией о курсах валют (название и значение).
 * @returns {JSX.Element} JSX-элемент, содержащий список курсов валют.
 */

function StockMarket({
  exchange = [
    { name: 'USD MOEX', value: 73.03 },
    { name: 'EUR MOEX', value: 86.03 },
  ],
}) {
  return (
    <div>
      <ul>
        {exchange.map((item, index) => (
          <li key={index}>
            {' '}
            {item.name}
            {' '}
            {item.value}
            {' '}
          </li>
        ))}
      </ul>
    </div>
  );
}

StockMarket.propTypes = {
  exchange: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StockMarket;
