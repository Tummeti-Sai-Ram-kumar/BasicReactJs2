import React from 'react'
class Vehicle extends React.Component{
    // States are the properties of the components which can be changed using setState function 
    // States need to be defined in constructor 
    constructor(){
        super() // we generally call the parent class constructor function and access its members 
        this.state = {name : "Ram" , role : "Front-End"}
    }
    updateUser = () => {
        this.setState({name : "Kumar" , role : "Back-End"})
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name} , I'm a {this.state.role} Developer </h1>
                <button onClick={this.updateUser}>Change User</button>
            </div>
        )
    }
}

export default Vehicle