import React from 'react'

class User extends React.Component{
    // the props shld always be passed to the constructor func and to the Reacts Component via super()
    // States can be changed but props cannot be changed 
    constructor(props){
        super(props)
        this.state = {uni : "LPU",cgpa : "8.45"}

    }
    
    render(){
        const details = {role : "Front-End" , Age : 21}
        const ChangeState = () => {
            this.setState({uni : "gprec" , cgpa : "8"})
        }
        return(
            <div>
                <h2>i'm {this.props.name}</h2>
                <Details details = {details}></Details>
                <h1>i'm from {this.state.uni} with {this.state.cgpa} cgpa</h1>

                <button onClick={ChangeState}>Change</button>
            </div>
        )
    }
}

class Details  extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>I'm a {this.props.details.role} developer of age {this.props.details.Age}</p>
            </div>
        )
    }
}

export default User