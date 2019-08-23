import React, { useEffect } from 'react'

const Cockpit = (props) => {

    /**
     * Typically useEffect() runs in ervery changes
     * Like, when something updated, created, or changes occure
     * But, If we want to use useEffect() for a specific component changes
     * we can do it by passing an array with the component name(s) to useEffect()
     * or, if we want to run useEffect() just once, when the component created
     * we can do it by just passing an empty array to useEffect() hook.
     */ 
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        alert("Hello")
    }, ['props.persons'])

    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    }

    const assignedClasses = []
    let btnClass = ''
    if(props.showPerson) {
        btnClass = 'red'
    }

    if (props.persons.length <=2) {
        assignedClasses.push( 'red' )
    }
    if (props.persons.length <=1) {
        assignedClasses.push( 'green' )
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button style={style} className={btnClass} onClick={ props.showPerson }>Toggle Person</button>
        </div>
    )
}

export default Cockpit