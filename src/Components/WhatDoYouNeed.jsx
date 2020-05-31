import React from 'react'


const WhatDoYouNeed = () => {
    return (
        <div>
        
            <h2>¿Qué Necesitas?</h2>

            <input type="text" placeholder="Tu ubicación" disabled />

            <div>   
                    <label htmlFor="">Tratamiento o examen a realizar</label>
                    <select name="" id="">
                        <option value="select"></option>
                        <option value="ecografia">Ecografía</option>
                        <option value="examenOrina">Examen de orina</option>
                        <option value="examenSangre">Examen de sangre</option>
                        <option value="inyeccionNeurobionta">Inyección Neurobionta</option>
                        <option value="revisionDermatologica">Revisión Dermatológica</option>
                        <option value="taco">TACO</option>
                        <option value="endovenoso">Tratamiento endovenoso</option>
                        <option value="psicologica">Visita Psicológica</option>
                        <option value="psiquiatrica">Visita Psiquiátrica</option>
                        <option value="reumatologica">Visita Reumatológica</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">Subir orden médica</label>

                </div>

                <div>
                    <label htmlFor="">Para cuando lo necesitas</label>
                    <select>
                        <option value="select"></option>
                        <option value="">Lo antes posible</option>
                        <option value="">Durante el día</option>
                        <option value="">Agendar cita</option>
                    </select>
                </div>
        </div>
    )
}

export default WhatDoYouNeed
