import React from 'react'

function LK(props){
    const details = props.details
    console.log(details)

    const display = (e) => {
        alert(e.target.getAttribute("index"))
    }

    const ListItems = details.map((element) => <li key={element.name.toString()} index={element.name} onClick={display}>{element.name} {element.role} </li>)

    return(
        <div>
            <ul>{ListItems}</ul>
        </div>
    )
}
export default LK