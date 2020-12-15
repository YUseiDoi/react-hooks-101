import React, { useEffect, useState } from 'react';

const App = props => {

  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log('useEffect');
  })

  useEffect(() => {
    console.log('useEffect2');
  }, [])

  useEffect(() => {
    console.log('useEffect3');
  }, [name])

  return (
    <>
      <p>現在の{state.name}は、{price}円です。</p> 
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price + 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}></input>
    </>
  );
}

App.defaultProps = {
  name: "",
  price: 1000,
}

export default App;
