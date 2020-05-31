import React, { useState, useEffect, Fragment } from 'react'
import '../css/Maps.css'
import '../css/LeafMap.css'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const LeafMap = () => {

    const geolocation = useGeolocation()
    const [medicalStaff, setMedicalStaff] = useState([])

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


    const latlng = { lat: geolocation.latitude, lng: geolocation.longitude };
    let center = latlng;
    let zoom = 16;

    return (
        <Fragment>
            <div className="leafmap-container">
                <div>
                    <MapContainer
                        center={center}
                        zoom={zoom}
                        medicalStaff={medicalStaff}
                    />
                </div>

                <div className="leafmap-button-container">
                    <Link to="/need"> <button>¿Qué Necesitas?</button> </Link>
                </div>
            </div>

            <Navbar />

        </Fragment>
    )
}

export default LeafMap
