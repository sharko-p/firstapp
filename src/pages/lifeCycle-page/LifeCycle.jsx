import React from "react";
import {
  liveCycleCode1,
  liveCycleCode2,
  liveCycleCode3,
  liveCycleCode4,
} from "../../ImportCode";
import "../../styles/myProject.css";

const LifeCycle = () => {
  return (
    <>
      <h2> LifeCycle</h2>
      <p>Основные методы жизненного цикла:</p>
      <p>
        1. constructor ().Обычно в React конструкторы используются только для
        двух целей:
      </p>
      <ul>
        <li>
          Инициализация локального состояния путем присвоения объекта this.state
        </li>
        <li>Привязка методов обработчика событий к экземпляру</li>
      </ul>
      <pre>
        <code className="codeStyle">{liveCycleCode1}</code>
      </pre>
      <p>2. render ().Рендеринг компонента. Отдает JSX</p>
      <pre>
        <code className="codeStyle">{liveCycleCode2}</code>
      </pre>
      <p>
        3. componentDidMount(). Вызывается сразу после монтирования компонента
        (вставки в дерево) и renrer(). Используется для отправки запросов на
        сервере удаленным ресурсам, setTimeout, обращение к DOM-элементам
      </p>
      <p>
        4. componentDidUpdate(prevProps, prevState).Вызывается после обновления
        компонента(ререндера). В качестве параметров передаются старые значения
        объектов: props и state
      </p>

      <p>
        5. componentWillUnmount()/Вызывается перед удалением компонента из DOM.
        Используется для закрытия асинхронных запросов, таймеров
      </p>
      <pre>
        <pre>
          <code className="codeStyle">{liveCycleCode3}</code>
        </pre>
      </pre>
      <p>
        Для использования методов жизненного цикла в функциональных компонентах
        предназначен хук useEffect. У него параметры coolback-функция, массив
        зависимостей
      </p>
      <pre>
        <code className="codeStyle">{liveCycleCode4}</code>
      </pre>
    </>
  );
};
export default LifeCycle;
