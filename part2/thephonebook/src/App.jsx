import { useState } from "react";
import FilterForm from "./components/FilterForm";
import NewNameForm from "./components/NewNameForm";
import FilteredPerson from "./components/FilteredPerson";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  // Add new name and number functionality 👇
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

  // Handle input change
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter Functionality 👇
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Render the filtered persons or the original array
  const filteredPersonArr = filter ? filteredPersons : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterForm handleInputChange={handleInputChange} />
      <h2>add a new</h2>
      <NewNameForm
        newName={newName}
        number={number}
        addNameHandler={addNameHandler}
        nameChangeHandler={nameChangeHandler}
        numberChangeHandler={numberChangeHandler}
      />
      <h2>Numbers</h2>
      <FilteredPerson filteredPersonArr={filteredPersonArr} />
    </div>
  );
};

export default App;
