/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import StockMarket from '../StockMarket/StockMarket';

/**
 * Компонент для отображения новостей и информации о курсах валют.
 * Включает в себя следующие элементы:
 * 1. Ссылки на разделы новостей.
 * 2. Список новостей, переданных через свойства.
 * 3. Компонент StockMarket для отображения курсов валют.
 *
 * @param {string} location - текст для отображения местоположения новостей.
 * @param {Array} news - массив с новостями для отображения.
 * @returns {JSX.Element} JSX-элемент, содержащий разделы новостей,
 * список новостей и компонент StockMarket.
 */

function News({ location, news }) {
  return (
    <>
      <div>
        <a href="#root">Сейчас в СМИ</a>
        <a href="#root">{location}</a>
        <a href="#root">Рекомендуем</a>
      </div>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            {' '}
            {item}
            {' '}
          </li>
        ))}
      </ul>
      <StockMarket />
    </>
  );
}

News.propTypes = {
  location: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default News;
