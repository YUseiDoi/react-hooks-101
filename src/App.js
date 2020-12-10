import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickPlusCount = () => {
    setCount(count + 1);
  }

  const onClickDownCount = () => {
    setCount(count - 1);
  }

  const onClickPlusCount2 = () => setCount(previousCount => previousCount + 1);

  const onClickDownCount2 = () => setCount(previousCount => previousCount - 1);

  const onClickReset = () => setCount(0);

  const onClickTwice = () => setCount(previousCount => previousCount * 2);

  const onClick3 = () => {
    {count % 3 === 0 && setCount(count / 3)};
  }

  return (
    <>
      <div>count: {count}</div>
      <button onClick={onClickPlusCount}>カウントアップ</button>
      <button onClick={onClickDownCount}>カウントダウン</button>

      <button onClick={onClickPlusCount2}>カウントアップ2</button>
      <button onClick={onClickDownCount2}>カウントダウン2</button>

      <button onClick={onClickReset}>リセット</button>

      <button onClick={onClickTwice}>2倍</button>

      <button onClick={onClick3}>3の倍数の時だけ3で割る</button>
    </>
  );
}

export default App;
