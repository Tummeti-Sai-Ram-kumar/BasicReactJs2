import React from 'react'
function Success(){
    return(
        <h3>Success ..!!</h3>
    )
}
function Fail(){
    return(
        <h3>Fail</h3>
    )
}

function CR(props){
   /* if(props.authStatus)
    return <Success/>
    else
    return <Fail/>

   */
    /*  return (
        <div>
            {props.authStatus ? <Fail></Fail> : <Success></Success>}
        </div>
    )
    */

    return(
        <div>
            {props.authStatus && <Success></Success>}
        </div>
    )

}

export default CR