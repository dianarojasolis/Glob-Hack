import React, { Fragment } from "react";
import { db } from "../BackEnd/firebase";
import "firebase/firestore";
import '../App.css'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";

const MedicalRecord = () => {
    
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [pathology, setPathology] = React.useState("");
  const [allergies, setAllergies] = React.useState("");
  const [medicines, setMedicines] = React.useState("");
  const [bloodType, setBloodType] = React.useState("");
  const [message, setMessage] = React.useState("");

  const saveData = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!age.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!weight.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!message.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!pathology.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!allergies.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!medicines.trim()) {
      console.log("elemento vacio");
      return;
    }
    if (!bloodType.trim()) {
      console.log("elemento vacio");
      return;
    }
    try {
      const newMedicalRecord = {
        name: name,
        age: age,
        weight: weight,
        height: height,
        pathology: pathology,
        allergies: allergies,
        medicines: medicines,
        bloodType: bloodType,
        message: message,
      };
      await db.collection("Medical-Reacord").add(newMedicalRecord);

      

      setName("");
      setAge("");
      setWeight("");
      setPathology("");
      setAllergies("");
      setMedicines("");
      setBloodType("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
        <header className="headerMedical">
          <h1>Ficha Médica</h1>
        </header>
      

      <div className="container">
        <form onSubmit={saveData} className="form-group col-sm-12">
          <div className="row">
          <div className="col-sm-12 ">
            <label>Nombre paciente</label>
          </div>
          <div>
          </div>

            <input
            className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            < div className="row">
          <div className="col-sm-12 md-6">
            <label>Edad</label>
            </div>
            <div>
              </div>
            <input
            className="form-control"
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            </div>
          
            < div className="row">
          <div className="col-sm-12 md-6">
            <label>Peso</label>
            </div>
            <div>
            </div>  
            <input
            className="form-control"
              type="text"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            </div>
          
          < div className="row">
          <div className="col-sm-12 md-6">
            <label>Altura</label>
            </div>
            <div>
            <select className="selectHeight" value={height} onChange={(e) => setHeight(e.target.value)}>
              <option value="select"></option>
              <option value="1,60m">1,60m</option>
              <option value="1,60m">1,65m</option>
              <option value="1,70m">1,70m</option>
              <option value="1,80m">1,80m</option>
              <option value="1,90m">1,90m</option>
            </select>
            </div>
            </div>
          
          < div className="row"></div>
          <div className="col-sm-12 md-6">
            <label>Patología</label>
            </div>
            <div>
           </div> 

            <div>
            <input
            className="form-control"
              type="text"
              name="pathology"
              value={pathology}
              onChange={(e) => setPathology(e.target.value)}
            />
          </div>

         
          < div className="row">
          <div className="col-sm-12 md-6">
            <label>Alérgias</label>
            </div>
            </div>
            

            <div>
            <input
              className="form-control"
              type="text"
              name="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
            </div>

            
         
           < div className="row">
          <div className="col-sm-12 md-6">
            <label>Medicamentos</label>
            </div>
            </div>

            <div>
            <input
            className="form-control"
              type="text"
              name="medicines"
              value={medicines}
              onChange={(e) => setMedicines(e.target.value)}
            />
          </div> 

          < div className="row">
          <div className="col-sm-12 md-6">
            <label>Tipo de sangre</label>
            </div>
            </div>

            <div>
            <input
            className="form-control"
              type="text"
              name="bloodType"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            />
            </div>

            
          
         < div className="row">
          <div className="col-sm-12 md-6">
            <label>Nota adicional</label>
            </div>
            </div>

            <div className="form-group col-ms-12">
            <input
            className="form-control"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        <Link to="/Home">
          <button type="submit" className="Button">
            GUARDAR
          </button>
          </Link>
        </form>
      </div>

      <Navbar />
    </Fragment>
  );
};

export default MedicalRecord;