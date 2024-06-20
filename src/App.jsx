import React, { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Modal from "./Modal";

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  const [concepts, setConcepts] = useState(CORE_CONCEPTS);

  const addConcept = (newConcept) => {
    setConcepts((prevConcepts) => [...prevConcepts, newConcept]);
  };

  return (
    <div>
      <main>
        <h2></h2>
        <section id="core-concepts">
          <h2>Conceptos Variados</h2>
          <ul>
            {concepts.map((concept, index) => (
              <CoreConcept
                key={index}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <Modal addConcept={addConcept} />
      </main>
    </div>
  );
}

export default App;
