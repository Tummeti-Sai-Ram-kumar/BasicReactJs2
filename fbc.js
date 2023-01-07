import React, { useState } from 'react'

const FBC = () => {
    const message = 'Hello World..!!'
    return (<Message value={message}></Message>)
}

const Message = ({value}) => {
    const [message , setMessage] = useState(value)
    return(
        <div>
            <h2>{message}</h2>
            <input type="text" value={message} onChange={(event) => {setMessage(event.target.value)}}></input>
        </div>
    )
}

export default FBC