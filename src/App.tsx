import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName( event.target.value );
  }
  const handleLastNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName( event.target.value );
  }
  const handleAgeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge( event.target.value );
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleNameInput} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleLastNameInput} />
      </div>

      <div>
        Idade:
        <input type="number" value={age} onChange={handleAgeInput} />
      </div>

      <hr/>

      Olá {name} {lastName}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;