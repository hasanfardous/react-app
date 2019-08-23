import React from 'react'
import Person from './Person/Person'


class Persons extends React.Component {

  // Component update life-cycle
  // when a component updates, the life-cycle starts

  // 1st cycle (it's also component creation life-cycle)
  // hens, 'getDerivedStateFromProps' is creation life cycle hook,
  // it can be skiped during component updating life cycle

  // getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props)
  //   return state
  // }

  // 2nd cycle 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate')
    return true
  }

  // 4th cycle
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return {spanShot: 'This is snapShot'}
  }

  // 5th cycle 
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('[Persons.js] componentDidUpdate', snapShot)
  }

  // 3rd cycle
  render () {

    console.log('[Persons.js] rendering...')

    return this.props.persons.map((person, indexOf) => {
      return (
        <Person 
          key={person.id}
          name={person.name} 
          age={person.age}
          click={() => {this.props.click(indexOf)}} 
          changeInput={ (event) => {this.props.changeInput(event, person.id)}} />
      )
    })
  }
  
  
}
      
export default Persons