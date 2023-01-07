import React from 'react'

class Event extends React.Component{
    constructor(props){
        super(props)
    }
    drive(a){
        alert("Drive" + a)
    }
    render(){
        return (
            <div>
                <button onClick={() => {this.drive("Ram")}}>Lets Drive</button>
            </div>
        )
    }
}

export default Event