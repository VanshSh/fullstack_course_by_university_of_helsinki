import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123-456-789" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  // Add Name, Number Handler
  const addNameHandler = (event) => {
    event.preventDefault();
    const newNameObj = {
      name: newName,
      number: number,
    };

    // Check if the name is already in the phonebook
    const stringifyPersons = JSON.stringify(persons);
    const stringifyNewNameObj = JSON.stringify(newNameObj);
    if (stringifyPersons.includes(stringifyNewNameObj)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newNameObj]);
    }
    setNewName("");
    setNumber("");
  };

  // Name Change Handler
  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  // Number Change Handler
  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameHandler}>
        <div>
          name: <input value={newName} onChange={nameChangeHandler} />
        </div>
        <div>
          number: <input value={number} onChange={numberChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
