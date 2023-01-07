import React from 'react'
import CBC2 from './cbc-child'
class CBC extends React.Component{
    render(){
        return(
            <CBC2></CBC2>
            
        )
    }
}

class CBC1 extends React.Component{
    render(){
        return (
            <h2>CBC child from same file </h2>
        )
    }
}

export default CBC;