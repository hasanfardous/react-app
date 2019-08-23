import React from 'react'
import './Person.css'

class Person extends React.Component {

    // componentDidMount() {
    //     console.log('[Person.js] componentDidMount -- ')
    // }

    render() {
        console.log('[Person.js] rendering..')
        return (
            <div className="Person">
                <p onClick={this.props.click}>Name: <strong>{this.props.name}</strong>, Age: <strong>{this.props.age}</strong></p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeInput} value={this.props.name}/>
            </div>
        )
    }
    
}

export default Person