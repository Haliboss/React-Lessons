import React from "react";
import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    <div>
      {data.map((person) => (
        <Person
          name={person.name}
          img={person.img}
          tel={person.tel}
          key={person.name}
        />
      ))}
    </div>
  );
}

export default App;
