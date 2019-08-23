import React, { useState } from 'react';
import './App.css';
import Person from './Persons/Person'

const App = () => {

  const [ personsState, setPerssonState ] = useState({
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Mull', age: 22 },
      { name: 'Aada', age: 34 }
    ]
  })

  const [otherState, setOtherState] = useState({
      otherState: 'Some other value'
  })

  // console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPerssonState({
      persons: [
        { name:newName, age: 33 },
        { name:'Fax', age: 23 },
        { name:'Lax', age: 35 }
      ]
    })
  }

  const changeName = (event) => {
    setPerssonState({
      persons: [
        { name:'Max', age: 33 },
        { name:'Fax', age: 23 },
        { name:event.target.value, age: 35 }
      ]
    })
  }

  return (
    <div className="App">
      <h2>Hello from React App</h2>
      <button onClick={ switchNameHandler.bind(this, 'chagol') }>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
        click={switchNameHandler} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'pagol') } >I Play WWE</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
        click={switchNameHandler}
        changeName= {changeName} />
    </div>
  );
}

export default App;