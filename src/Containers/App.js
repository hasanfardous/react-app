import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'


class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id: 1, name: 'Tutul', age: 24},
      {id: 2, name: 'Jhon', age: 33},
      {id: 3, name: 'Doe', age: 28}
    ],
    othterState: 'Some other state',
    showPerson: false
  }


  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }


  changeInputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    // console.log(personIndex)
    // Copy single person with the personIndex
    const person = {
      ...this.state.persons[personIndex]
    }

    // Modifing the person name
    person.name = event.target.value

    // then, copy the whole person array again
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    // Setting the state.persons with the person
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index) => {
    // console.log(index);
    const persons = [...this.state.persons]
    // let removed_item = persons.splice(index, 1)
    persons.splice(index, 1)
    // console.log(removed_item)
    this.setState({
      persons: persons
    })
    
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }


  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  render () {
    console.log('[App.js] render')

    let persons = null
    if(this.state.showPerson) {
      persons = (
        <div> 
          {
            <Persons
              persons = {this.state.persons}
              click = {this.deletePersonHandler}
              changeInput = {this.changeInputHandler}
             />
          }
        </div>
      )
    }    

    // console.log(this.state.showPerson)
    return (
      <div className="App">
        <Cockpit 
          title = { this.props.appTitle }
          showPerson = { this.togglePersonHandler }
          persons = {this.state.persons}
        />
        { persons }
      </div>
    );
  }
}

export default App;