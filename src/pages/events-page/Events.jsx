import React from "react";
import { eventsCode1 } from "../../ImportCode";
import "../../myProject.css";
const Events = () => {
  return (
    <>
      <h2> Events</h2>
      <p>
        События в React именуются в стиле camelCase вместо нижнего регистра.С
        JSX вы передаёте функцию как обработчик события вместо строки.Популярные
        обработчики событий: onClick, onChange. Существует множество
        поддерживаемых событий, вот общий список:
      </p>
      <ul>
        <li>Буфер обмена: onCopy, onCut, onPaste;</li>
        <li>
          Составление/ввод данных: onCompositionEnd, onCompositionStart,
          onCompositionUpdate;
        </li>
        <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp;</li>
        <li>Фокусировка: onFocus, onBlur;</li>
        <li>Форма: onChange, onInput, onSubmit;</li>
        <li>
          Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,
          onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop,
          onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,
          onMouseOver, onMouseUp;
        </li>
        <li>Выделение: onSelect;</li>
        <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart;</li>
        <li>UI: onScroll;</li>
        <li>Колёсико мышки: onWheel;</li>
        <li>
          Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange,
          onEmptied, onEncrypted, onEnded, onError, onLoadedData,
          onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress,
          onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate,
          onVolumeChange, onWaiting;
        </li>
      </ul>
      <li>Изображение: onLoad, onError;</li>
      <li>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration;</li>
      <li>Переход: onTransitionEnd.</li>
      <p>
        {" "}
        Наиболее часто используемые события:onClick() - используется в кнопке;
      </p>
      <p>onChange() - используется в элементе формы (input)</p>
      <pre>
        <code className="codeStyle">{eventsCode1}</code>
      </pre>
    </>
  );
};
export default Events;
