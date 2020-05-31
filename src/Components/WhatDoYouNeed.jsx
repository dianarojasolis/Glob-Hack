import React, { useState, useCallback } from 'react'
import uploadIcon from '../img/upload.png'
import { Link } from "react-router-dom"
import '../css/WhatDoYouNeed.css'
import { db } from '../BackEnd/firebase'
import shortid from 'shortid'


const WhatDoYouNeed = () => {

    const [exam, setExam] = useState('')
    const [whenDate, setWhenDate] = useState('')

    const addAppointment = useCallback(async () => {

        try {
            await db.collection('medicalAppointment').add({
                treatment: exam,
                when: whenDate,
                id: shortid.generate(),
                date: Date.now()
            })

        } catch (error) {
            console.log(error);
        }

        setExam('')
        setWhenDate('')
        },

        [exam, whenDate],
    )


    return (
        <div className="whatdo-container">
            <h2 className="whatdo-title">¿Qué Necesitas?</h2>

            <input type="text" placeholder="Tu ubicación" disabled className="your-location" />

            <div className="exam-box">
                <p>Tratamiento o examen a realizar</p>
                <select onChange={e => setExam(e.target.value)}>
                    <option value="select"></option>
                    <option value="Ecografia">Ecografía</option>
                    <option value="Examen de orina">Examen de orina</option>
                    <option value="Examen de sangre">Examen de sangre</option>
                    <option value="Inyección Neurobionta">Inyección Neurobionta</option>
                    <option value="Revisión Dermatológica">Revisión Dermatológica</option>
                    <option value="TACO">TACO</option>
                    <option value="Tratamiento endovenoso">Tratamiento endovenoso</option>
                    <option value="Visita Psicológica">Visita Psicológica</option>
                    <option value="Visita Psiquiátrica">Visita Psiquiátrica</option>
                    <option value="Visita Reumatológica">Visita Reumatológica</option>
                </select>
            </div>

            <div className="order-box">
                <p>Subir orden médica</p>
                <div className="uploadfile-box">
                    <input type="file" />
                    <img src={uploadIcon} alt="subir imagen" />
                </div>
            </div>

            <div className="when-box">
                <p>Para cuando lo necesitas</p>
                <select onChange={e => setWhenDate(e.target.value)}>
                    <option value="select"></option>
                    <option value="Lo antes posible">Lo antes posible</option>
                    <option value="Durante el día">Durante el día</option>
                    <option value="Agendar cita">Agendar cita</option>
                </select>
            </div>

            <div>
                <Link to="/mapend"><button onClick={() => addAppointment()}>Continuar</button></Link>
            </div>
        </div>
    )
}

export default WhatDoYouNeed
