import { useState } from 'react'

// import './App.css'


function CounterApp() {
  //count : 이전 또는 현재의 값, setCount() : count 값 변경 함수, 반드시 이걸 거쳐야함.
  const [count, setCount] = useState(0)
  function plusMax10() {
    setCount((count) => {
      if (count + 1 >= 10) return 10;
      return count + 1;
    })
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count + 2)}>+2</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((count) => count >= 10 ? count : count + 1)}>최대 10까지(3항 연산자)</button>
      <button onClick={() => setCount((count) => Math.min(count + 1, 10))}>최대 10까지(Math.min)</button>
      {/* <button onClick={setCount(0)}>reset2</button> Too many re-renders*/}
      <button onClick={() => setCount((count) => {
        if (count + 1 >= 10) return 10;
        return count + 1;
      })}>최대 10까지(if)</button>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)} //JS 함수 호출 X 함수 정의
        >
        Count is {count}
        </button> */}
      <button onClick={() => plusMax10}>최대 10까지(if)</button>
    </>
  )
}


export default CounterApp