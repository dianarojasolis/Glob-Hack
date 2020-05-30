import React, { Fragment } from 'react'
import { Map, TileLayer } from 'react-leaflet'

const MapContainer = () => {

    const UrlMap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    
    const center= [-33.4163883, -70.660074]

    return (
        <Fragment>
            <Map
                center={center}
                zoom={16}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={UrlMap}
                />
            </Map>

        </Fragment>
    )
}

export default MapContainer
