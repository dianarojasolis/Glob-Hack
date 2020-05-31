import React, { Fragment } from "react";

import "./Home.css";
import Navbar from "./Navbar";
import { db } from "../BackEnd/firebase";

const Home = () => {
  const [medicalReport, setMedicalReport] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await db.collection("Medical-Reacord").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMedicalReport(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <Fragment>
      <div>
        <header className="headerHome">
          <h5 className="titleHome">Ficha Médica</h5>
        </header>
        <section>
          <div container>
            <div item xs={12} sm={12} md={12}>
              {medicalReport.map((item) => (
                <div>
                  <div>
                    {
                      <div key={item.id}>
                        <div>
                          <div>
                            <div >
                              <label>Nombre paciente</label>
                              <p>{item.name}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Edad</label>
                              <p>{item.age}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Peso</label>
                              <p>{item.weight}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Altura</label>
                              <p className="inputHeight">{item.height}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Patología</label>
                              <p>{item.pathology}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Alergías</label>
                              <p>{item.allergies}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Medicamentos</label>
                              <p>{item.medicines}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Tipo de sangre</label>
                              <p>{item.bloodType}</p>
                            </div>

                            <div className="wrapBorder">
                              <label>Nota adicional</label>
                              <p>{item.message}</p>
                            </div>

                            
                          </div>
                          <div></div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Navbar />
    </Fragment>
  );
};

export default Home;
