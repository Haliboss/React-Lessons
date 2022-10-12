import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    message: "random message",
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }

const incAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div className="container text-center mt-4">
      <h1>Hooks</h1>
      <h2>COUNT:{count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        INC
      </button>
      <button onClick={decrement} className="btn btn-danger">
        DEC
      </button>

      <h2> {person.name} </h2>
      <h2> {person.age} </h2>
      <h2> {person.message} </h2>
        <button onClick={() => setPerson({...person, age
        : person.age + 1})} className="btn btn-success">INC</button>
    </div>
  );
};
