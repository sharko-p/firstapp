import React from "react";
import {
  propsCode1,
  propsCode2,
  propsCode3,
  propsCode4,
  propsCode5,
  propsCode6,
} from "../../ImportCode";
import "../../styles/myProject.css";

const Props = () => {
  return (
    <>
      <h2> Props</h2>
      <p>
        Props (пропсы) — это входные данные React-компонентов, передаваемые от
        родительского компонента дочернему компоненту как отрибуты. props
        предназначены только для чтения. Ни в каком случае их не следует
        изменять:
      </p>
      <p>props.number = 42; // Неправильно!</p>
      <p>
        Если нужно поменять значение в ответ на пользовательский ввод или
        ответсервера, используйте state (состояние).
      </p>
      <p>
        Функциональные компоненты свойства принимают в качестве аргумента. Props
        представляют собой объект, содержащие свойства. В параметры можно
        передать всё что угодно и сколько угодно.Обратиться к ним можно -
        props.имя-свойства.
      </p>
      <pre>
        <code className="codeStyle">
          {propsCode1}
          {propsCode2}
          {propsCode3}
        </code>
      </pre>
      <p>
        {" "}
        Классовые компоненты свойства принимают по умолчанию и обратиться к ним
        можно с помощью this.props.имя-свойства.
      </p>
      <pre>
        <code className="codeStyle">{propsCode4}</code>
      </pre>
      <p>
        Элементы могут описывать и наши собственные компоненты: Когда React
        встречает подобный элемент, он собирает все JSX-атрибуты и дочерние
        элементы в один объект и передаёт их нашему компоненту. Этот объект
        называется «пропсы». Например, этот компонент выведет «Привет, Алиса» на
        страницу:
      </p>
      <pre>
        <code className="codeStyle">{propsCode5}</code>
        <ol type="1">
          <li>Мы передаём React-элемент {propsCode6} в ReactDOM.render().</li>
          <li>React вызывает наш компонент Welcome с пропсами name: 'Алиса'</li>
          <li>
            Наш компонент Welcome возвращает элемент h1 Привет, Алиса /h1 в
            качестве результата.
          </li>
          <li>
            React DOM делает минимальные изменения в DOM, чтобы получилось h1
            Привет, Алиса /h1.
          </li>
        </ol>
      </pre>
    </>
  );
};
export default Props;
