import React from 'react'
import Logo from '../img/logo.png'




const CreateAccount = () => {

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [prevision, setPrevision] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);
    const [register, setRegister] = React.useState(true)

    const processingData = (e) =>{ 
        e.preventDefault();
      
        if (!name.trim()) {
          console.log("Ingrese Nombre");
          setError("Ingrese Nombre");
          return;
        }
        if (!email.trim()) {
          console.log("Ingrese Email");
          setError("Ingrese Email");
          return;
        }
        if (!password.trim()) {
          setError("Ingrese Password");
          return;
        }
        if (password.length < 6) {
          setError("EL password debe ser de 6 caracteres");
          return;
        }
        console.log('correcto')
        setError(null)
      
      
      }

    return (

     
            
  
        <div>
            
            <form onSubmit={processingData}>
             <div className="container">
             <img className="Logo" alt="" src={Logo} />
            <div class="row ">
            <div class="col-sm-12 mt-5">
              <label>Nombre</label>
              </div>
          </div>
          
          
          <input
            type="text"
            placeholder="Juan Pérez Pérez"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          
            <div class="row">
            <div class="col-sm-12 mt-5">
          <label>Rut paciente</label>
          </div>
          </div>
          <div class="row">
            <div class="col-sm-12 mt-5">
          <input className="date"
          type="num" 
          placeholder="12.345.678-9" 
          value={rut}
          onChange={e => setRut(e.target.value)}
          />
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12 mt-5">
          <label>Previsión de salud del paciente</label>
          </div>
          </div>
          <select onChange={e => setPrevision( e.target.value)}>
            <option value="select"></option>
            <option value="fonasa">Fonasa</option>
            <option value="isapre">Isapre</option>
          </select>

          <div class="row">
          <div class="col-sm-12 mt-5">
          </div><label>Teléfono cuidador o paciente</label>
          </div>
          <input 
          type="num" 
          placeholder="+56"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          />

          <div class="row">
          <div class="col-sm-12 mt-5">
          <label>Correo cuidador o paciente</label>
          </div>
          </div>
          <input
            type="email"
            placeholder="juanperezprez@gmail.com"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
          <div class="row">
          <div class="col-sm-12 mt-5"></div>
          <label>Rut</label>
          </div>
          
          <input 
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

           <div class="row">
            <div class="col-sm-12 mt-5">
          <button className="Button"
          type="submit"
          >
            Continuar     
          </button> 
          </div>
          </div>
          </div>
          
      </form>
        </div>
    )
}


export default CreateAccount