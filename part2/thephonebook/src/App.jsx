import { useEffect, useState } from "react";
import FilterForm from "./components/FilterForm";
import NewNameForm from "./components/NewNameForm";
import FilteredPerson from "./components/FilteredPerson";
import services from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  // Function to get all the persons from the server
  const getAllPersons = () => {
    services.getAll().then((intialPersons) => {
      setPersons(intialPersons);
    });
  };
  useEffect(() => {
    getAllPersons();
  }, []);

  // Name Change Handler
  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  // Number Change Handler
  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  // Add new name and number functionality 👇
  const addNameHandler = (event) => {
    event.preventDefault();
    const newNameObj = {
      name: newName,
      number: number,
    };

    // Check if the name is already in the phonebook
    const duplicatePerson = persons.find(
      (person) => person.name === newNameObj.name
    );
    if (duplicatePerson) {
      confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      services.update(duplicatePerson.id, newNameObj).then((updatedPerson) => {
        setPersons(
          persons.map((person) => {
            return person.id !== duplicatePerson.id ? person : updatedPerson;
          })
        );
      });
      setNewName("");
      setNumber("");
    } else {
      services.create(newNameObj).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNumber("");
      });
    }
  };

  // Filter Functionality 👇

  // Handle Filter input change
  const handleFilterInputChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter the persons array
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Render the filtered persons or the original array
  const filteredPersonArr = filter ? filteredPersons : persons;

  // Delete Functionality 👇
  const deleteName = (person) => {
    confirm(`Delete ${person.name} ?`);
    services.deletePerson(person.id).then(() => {
      getAllPersons();
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterForm handleInputChange={handleFilterInputChange} />
      <h2>add a new</h2>
      <NewNameForm
        newName={newName}
        number={number}
        addNameHandler={addNameHandler}
        nameChangeHandler={nameChangeHandler}
        numberChangeHandler={numberChangeHandler}
      />
      <h2>Numbers</h2>
      <FilteredPerson
        filteredPersonArr={filteredPersonArr}
        deleteName={deleteName}
      />
    </div>
  );
};

export default App;
