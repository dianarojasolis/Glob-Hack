import React, { useState } from 'react'
import '../Mapa.css'

import MapContainer from './MapContainer'
import useGeolocation from 'react-hook-geolocation'

const LeafMap = () => {

    const geolocation = useGeolocation()
    const [medicalStaff, setMedicalStaff] = useState([])


    const latlng = { lat: geolocation.latitude, lng: geolocation.longitude };
    let center = latlng;
    let zoom = 16;

    return (
        <div>
            <MapContainer 
                center={center}
                zoom={zoom}
            
            />
        </div>
    )
}

export default LeafMap
