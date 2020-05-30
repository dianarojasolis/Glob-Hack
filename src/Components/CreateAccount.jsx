import React from "react";
import { auth, db } from "../Firebase/firebase";
import { Link, withRouter } from "react-router-dom";

const CreateAccount = (props) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [rut, setRut] = React.useState("");
  const [prevision, setPrevision] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  // const [register, setRegister] = React.useState(true);

  const processingData = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      console.log("Ingrese Nombre");
      setError("Ingrese Nombre");
      return;
    }
    if (!rut.trim()) {
      console.log("Rut no valido");
      setError("Rut no valido");
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

    // if (register) {
    //   registerAccount();
    // }
    // else {
    //   login()
    // }
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
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRut("");
      setError(null);
      props.history.push("/Home");

      console.log(res.user);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no valido");
      }

      if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [name, rut, phone, prevision, email, password, props.history]);

  return (
    <div>
      <form onSubmit={processingData}>
        {error && <div>{error}</div>}

        <input
          type="text"
          label="Nombre paciente"
          placeholder="Juan Pérez Pérez"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="num"
          label="RUT paciente"
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
          label="Telèfono cuidador o paciente"
          placeholder="+56"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          label="Correo cuidador o paciente"
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

        <button onClick={() => registerAccount()} type="button">
          Registrarme
        </button>

        <Link to="/Login">
          <button bgcolor="true">¿ya estas registrado?</button>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(CreateAccount);

