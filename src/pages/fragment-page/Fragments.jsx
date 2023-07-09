import React from "react";
import {
  fragmentsCode1,
  fragmentsCode2,
  fragmentsCode3,
  fragmentsCode4,
} from "../../ImportCode";
import "../../myProject.css";

const Fragments = () => {
  return (
    <>
      <h2> Fragment</h2>
      <p>
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM
      </p>
      <p>
        Используем React.Fragment или выполняем импорт, чтобы использовать
        Fragment:
      </p>
      <pre>
        <code className="codeStyle">{fragmentsCode1}</code>
      </pre>
      <p>Заменяем теги div на Fragment:</p>
      <pre>
        <code className="codeStyle">{fragmentsCode2}</code>
      </pre>
      <p>Существует сокращенная запись (импортировать не нужно):</p>
      <pre>
        <code className="codeStyle">{fragmentsCode3}</code>
      </pre>
      <p>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
      <pre>
        <code className="codeStyle">{fragmentsCode4}</code>
      </pre>
    </>
  );
};
export default Fragments;
