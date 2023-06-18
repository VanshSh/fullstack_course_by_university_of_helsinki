import { useEffect, useState } from "react";
import FilterForm from "./components/FilterForm";
import axios from "axios";
import NewNameForm from "./components/NewNameForm";
import FilteredPerson from "./components/FilteredPerson";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  // Fetch data from json-server
  useEffect(() => {
    const promise = axios.get("http://localhost:3001/persons");
    promise.then((response) => {
      setPersons(response.data);
    });
  }, []);

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

  // Filter Functionality 👇

  // Handle input change
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter the persons array
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
