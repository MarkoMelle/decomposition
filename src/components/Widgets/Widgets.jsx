import React from 'react';
import Widget from './Widget/Widget';

/**
 * Компонент, содержащий различные виджеты.
 *
 * @returns {JSX.Element} JSX-элемент, содержащий компоненты виджетов.
 */

function Widgets() {
  return (
    <div>
      <Widget title="Погода">
        <p>Сегодня +20</p>
      </Widget>
      <Widget title="Карта">
        <p>Карта</p>
      </Widget>
      <Widget title="Телепрограмма">
        <p>02:00 - Спорт</p>
        <p>03:00 - Новости</p>
      </Widget>
    </div>
  );
}

export default Widgets;
