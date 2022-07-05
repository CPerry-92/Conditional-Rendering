import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Person from './Components/Person';

function App() {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')

  const handleClick = (index) => {
    let storedPeople = [...persons];
    storedPeople.splice(index, 1);
    setPersons(storedPeople);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersons([...persons,{name: nameInput,age: parseInt(ageInput),},]);
    setNameInput('');
    setAgeInput('');
  };

  return (
    <div className="App">
      <h1>Introduction to React</h1>
          <Form
              handleSubmit={handleSubmit}
              nameInput={nameInput}
              setNameInput={setNameInput}
              setAgeInput={setAgeInput}
              ageInput={ageInput}
            />
          {persons.map((person, index) => {
            return (
            <Person 
              name={person.name}
              age={person.age}
              key={ index }
              handleClick={() => handleClick(index)}
            />
            );
            })}
      </div>
  );
}

export default App;
