import React, { useState } from 'react';

const Counter = () => {
  const [count,setCount] = useState(0)
  const handelIncrement = () =>{
    setCount(count + 1)
  }

  const handelDecrement = () =>{
    setCount(count - 1)
  }

  const handelReset = () =>{
    setCount(count * 0)
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={handelIncrement} className="btn card__btn">+</button>
          <button onClick={handelDecrement} disabled = {count===0 ? true : false}  className="btn card__btn">-</button>
          <button onClick={handelReset} className="btn card__btn">0</button>
       
        </div>
        <p className='center'>@bejoyMunshi</p>
      </div>
    </div>
  );
};

export default Counter;
