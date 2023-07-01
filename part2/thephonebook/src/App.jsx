import { useEffect, useState } from "react";
import FilterForm from "./components/FilterForm";
import NewNameForm from "./components/NewNameForm";
import FilteredPerson from "./components/FilteredPerson";
import services from "./services/persons";
import Notification from "./components/Notification";
import React from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [notificationMessage, setNotificationMessage] = useState({
    message: null,
    type: null,
  });

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
      (person) => person.name.toLowerCase() === newNameObj.name.toLowerCase()
    );
    if (duplicatePerson) {
      confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      services
        .update(duplicatePerson.id, newNameObj)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) => {
              return person.id !== duplicatePerson.id ? person : updatedPerson;
            })
          );
          setNotificationMessage({
            message: `${newName} is already added to phonebook, replaced the old number with a new one.`,
            type: "success",
          });
          setTimeout(() => {
            setNotificationMessage({
              message: null,
              type: null,
            });
          }, 3000);
        })
        .catch((err) => {
          setNotificationMessage({
            message: `${err.response.data.error}`,
            type: "error",
          });
          setTimeout(() => {
            setNotificationMessage({
              message: null,
              type: null,
            });
          }, 3000);
        });
      setNewName("");
      setNumber("");
    } else {
      services
        .create(newNameObj)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setNotificationMessage({
            message: `Added ${newName}`,
            type: "success",
          });
          setTimeout(() => {
            setNotificationMessage({
              message: null,
              type: null,
            });
          }, 3000);
          setNewName("");
          setNumber("");
        })
        .catch((err) => {
          setNotificationMessage({
            message: `${err.response.data.error}`,
            type: "error",
          });
          setTimeout(() => {
            setNotificationMessage({
              message: null,
              type: null,
            });
          }, 3000);
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
    person.name?.toLowerCase().includes(filter?.toLowerCase())
  );

  // Render the filtered persons or the original array
  const filteredPersonArr = filter ? filteredPersons : persons;

  // Delete Functionality 👇
  const deleteName = (person) => {
    confirm(`Delete ${person.name} ?`);
    services
      .deletePerson(person.id)
      .then(() => {
        getAllPersons();
      })
      .catch((error) => {
        setNotificationMessage({
          message: `${person.name} was already removed from server`,
          type: "error",
        });
        setTimeout(() => {
          setNotificationMessage({
            message: null,
            type: null,
          });
        }, 3000);
      });
  };

  return (
    <div>
      <Notification
        message={notificationMessage.message}
        type={notificationMessage.type}
      />
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
