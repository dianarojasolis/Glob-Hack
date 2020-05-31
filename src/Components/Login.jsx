import React from "react";
import { auth } from "../BackEnd/firebase";
import { Link, withRouter } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);

      setEmail("");
      setPassword("");
      setError(null);
      props.history.push("/map");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no valido");
      }
      if (error.code === "auth/user-not-found") {
        setError("Email no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("contraseña incorrecta");
      }
    }
  }, [email, password, props.history]);

  return (
    <div>
      <h1>Login</h1>

      <form>
        {error && <div>{error}</div>}

        <input
          type="num"
          label="Correo cuidador o paciente"
          placeholder="example@gmail.com"
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

        <button onClick={() => login()} type="button">
          Acceder
        </button>

        <Link to="/">
          <button bgColor="true">¿No tienes cuenta?</button>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
