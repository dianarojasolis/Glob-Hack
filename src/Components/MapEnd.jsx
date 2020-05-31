import React, { useState, useEffect, Fragment } from 'react'
import '../css/Maps.css'
import '../css/MapEnd.css'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'
import Navbar from './Navbar'
import { db } from '../BackEnd/firebase'

const MapEnd = () => {

    const geolocation = useGeolocation()
    const [medicalStaff, setMedicalStaff] = useState([])
    const [dataExams, setDataExams] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Glob-Hack/master/src/BackEnd/HealthPersonnelUbication.json')
                const infoStaffLocation = await data.json()
                // console.log(infoStaffLocation)
                setMedicalStaff(infoStaffLocation)

            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])


    useEffect(() => {
        const getInfoExams = async () => {
          try {
            const data = await db.collection('medicalAppointment').get()
            const arrayAppointment = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setDataExams(arrayAppointment)
            console.log(arrayAppointment);
    
          } catch (error) {
            console.log(error)
          }
        }
    
        getInfoExams()
      }, [])


    const latlng = { lat: geolocation.latitude, lng: geolocation.longitude };
    let center = latlng;
    let zoom = 16;

    return (
        <Fragment>
            <div className="mapend-container">
                <div>
                    <MapContainer
                        center={center}
                        zoom={zoom}
                        medicalStaff={medicalStaff}
                    />
                </div>

                {
                    dataExams.map(item => (
                        <div key={item.id}>
                            <p>{item.treatment}</p>
                            <p>{item.when}</p>
                            <p>{item.arrive}</p>
                        </div>
                    ))
                }

                <div className="mapend-button-container">
                    <button>Confirmar Tratamiento</button>
                </div>
            </div>

            <Navbar />

        </Fragment>
    )
}

export default MapEnd