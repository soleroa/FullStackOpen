import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>filter shown with: </p> <input value={value} onChange={onChange} />
    </div>
  );
};

const PersonForm = ({
  onSubmit,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const ListaPersonas = ({ filteredPersons }) => {
  return (
    <div>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  // Estado para las personas, el nombre, el número y la búsqueda
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect para hacer la solicitud a la API una sola vez al montar el componente
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data); // Almacena los datos obtenidos del servidor
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []); // El array vacío significa que este efecto solo se ejecutará una vez

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={searchQuery} onChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={handleFormSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ListaPersonas filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
