import React from 'react'
import { auth } from "../BackEnd/firebase";
import { withRouter } from "react-router-dom";

const Admin = () => {

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe un usuario')
        }else{
            console.log('no existe el usuario')
        }

    }, [])
    return (
        <div>
            <h2>Ruta Protegida</h2>
        </div>
    )
}

export default Admin
