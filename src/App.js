import React, { useEffect, useState } from "react";
import data from './api/data.js';
import "./App.css";
import Main from "./components/Main.js";

function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(setPeople);
  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="section">
      <div className="title">
        <span>Our Teammate</span>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) =>   (
           
          <Main
         
            person={person}
            personIndex={personIndex}
            index={index}
            setIndex={setIndex}
            people={people}
            key={personIndex}
          />
        ) )}
      </div>
    </div>
  );
}

export default App;
