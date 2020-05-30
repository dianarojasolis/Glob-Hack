
import React from 'react'
import Logo from '../img/logo.png";
  import { auth, db } from "../BackEnd/firebase";


const CreateAccount = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [rut, setRut] = React.useState("");
  const [prevision, setPrevision] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [register, setRegister] = React.useState(true);

  const processingData = (e) => {
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
    console.log("correcto");
    setError(null);

    if (register) {
      registerAccount();
    }
  };
  const registerAccount = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection("users").doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid,
        name: name,
        rut: rut,
        phone: phone,
        prevision: prevision,
      });

      console.log(res.user);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no valido");
      }


    return (

     
            
  
        <div>
            <img className="Logo" alt="" src={Logo} />
            <form onSubmit={processingData}>
            <div class="container-fluid">
            <div class="row sm-12">
            <div class="row">
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
          <input className="date"
          type="num" 
          placeholder="12.345.678-9" 
          value={rut}
          onChange={e => setRut(e.target.value)}
          />
          
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
          </div>
      if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [name, rut, phone, prevision, email, password]);

  return (
    <div>
      <h3>{register ? "Registro de usuarios" : "Login de accseso"}</h3>
      <form onSubmit={processingData}>
        {error && <div>{error}</div>}

        <input
          type="text"
          placeholder="Juan Pérez Pérez"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="num"
          placeholder="12.345.678-9"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />

        <select onChange={(e) => setPrevision(e.target.value)}>
          <option value="select"></option>
          <option value="fonasa">Fonasa</option>
          <option value="isapre">Isapre</option>
        </select>

        <input
          type="num"
          placeholder="+56"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="juanperezprez@gmail.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="******"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{register ? "Registrarse" : "Acceder"}</button>

        <button type="button" onClick={() => setRegister(!register)}></button>

      </form>
    </div>
  );
};

export default CreateAccount;

