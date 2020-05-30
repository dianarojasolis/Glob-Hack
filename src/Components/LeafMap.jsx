import React, { useState, useEffect } from 'react'
import '../Mapa.css'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'

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
        <div>
            <MapContainer 
                center={center}
                zoom={zoom}
                medicalStaff={medicalStaff}
            />
        </div>
    )
}

export default LeafMap
