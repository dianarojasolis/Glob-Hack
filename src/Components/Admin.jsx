import React from 'react'
import { auth } from "../BackEnd/firebase";
import { withRouter } from "react-router-dom";

const Admin = (props) => {

    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe un usuario')
            setUser(auth.currentUser)
        }else{
            console.log('no existe el usuario')
            props.history.push('./Login')
        }

    }, [])
    return (
        <div>
            <h2>Ruta Protegida</h2>
        </div>
    )
}

export default withRouter (Admin)
