import React, { useState } from "react";
import {
  stateCode1,
  stateCode2,
  stateCode3,
  stateCode4,
  stateCode5,
  stateCode6,
} from "../../ImportCode";
import "../../myProject.css";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2> State</h2>
      <p>
        State (состояние) в React – это объект, позволяющий изменять состояние
        компоненты. Изменения могут основываться на ответе от пользователя,
        новых сообщениях с сервера, ответа сети и т.д.
      </p>
      <p>
        Состояние компонента должно быть приватным для компонента и
        контролироваться им. Изменения состояния компонента необходимо делать
        внутри компонента – инициализация и обновление состояния компонента.
      </p>
      <pre>
        <code className="codeStyle">{stateCode1}</code>
      </pre>
      <p>Так нельзя менять состояние: this.state.username='Mark'</p>
      <p>
        Единственный допустимый способ обновления состояния компонента – через
        setState(). setState() является асинхронным, первым параметром может
        быть либо объект, либо функция, вторым callback-функция, которая
        сработает когда state обновится. Каждый вызов метода setState()
        обновляет render, по этому setState() нельзя вызывать в методе render.
      </p>
      <p>
        Первый способ изменить state это объект, но он не гарантирует корректный
        ререндер:
      </p>
      <pre>
        <code className="codeStyle">{stateCode2}</code>
      </pre>
      <p>
        Второй способ изменить state это функция, которая в параметр себя
        принимает объект state и возвращает объект с изменённым значением:
      </p>
      <pre>
        <code className="codeStyle">{stateCode3}</code>
      </pre>
      <p>
        В функциональных компонентах state создается с помощью хука useState()
        Чтобы воспользоваться им, необходимо импортировать useState из 'react':
      </p>
      <pre>
        <code className="codeStyle">{stateCode4}</code>
      </pre>
      <p>
        Хук useState() принимается в качестве параметра первоначальное значение
        для переменной, а возвращает массив, содержащий переменную и функцию,
        которая изменяет эту переменную.изменяет эту переменную. При объявлении
        state часто используют деструктурирующее присваивание:
      </p>
      <pre>
        <code className="codeStyle">{stateCode5}</code>
      </pre>
      {count}
      <button
        onClick={() => setCount((prevState) => prevState + 1)}
        className="stateButtonStyle"
      >
        tap
      </button>
      <p>
        Примером работы со state является счётчик, который изменяется при
        нажатии на кнопку. Код имеет следующий вид:
      </p>
      <pre>
        <code className="codeStyle">{stateCode6}</code>
      </pre>
    </>
  );
};
export default State;
