import React from 'react';
import News from './News/News';
import SearchInput from './SearchInput/SearchInput';
import AdBanner from './AdBanner/AdBanner';
import Widgets from './Widgets/Widgets';

/**
 * Главный компонент приложения, содержащий все остальные компоненты.
 * Включает в себя следующие компоненты:
 * 1. News - компонент для отображения новостей и информации о курсах валют.
 * 2. SearchInput - компонент для поиска с полем ввода.
 * 3. AdBanner - компонент для отображения рекламного баннера.
 * 4. Widgets - компонент, содержащий различные виджеты, такие как погода, карта и телепрограмма.
 *
 * @returns {JSX.Element} JSX-элемент, содержащий компоненты приложения
 */

function App() {
  return (
    <>
      <News
        location="В Германии"
        news={['Новость 1', 'Новость 2', 'Новость 3', 'Новость 4']}
      />
      <SearchInput />
      <AdBanner> Рекламный баннер </AdBanner>
      <Widgets />
    </>
  );
}

export default App;
