import React from "react";
import {reactMemoCode2} from "./ImportCode";
import './myProject.css';
const PureComponent = () => {
  
  return (
    <>
      <h2> Pure Component</h2>
      <p>Pure Компонент используется только в классовых компонентах, по умолчанию реализовывает метод shouldComponentUpdate().
        Ререндерить компоненту? False. Он ререндерится только если меняются props. Используется для оптимизации работы приложения.</p>
      <pre>
        <code className="codeStyle">{reactMemoCode2}</code>
      </pre>
      <p>«Чистой» называется функция, которая: для одинаковых входных данных всегда возвращает один результат; не имеет побочных эффектов
        (то есть не изменяет внешние состояния); не зависит от внешних состояний.
</p>
    </>
  );
};

export default PureComponent;






