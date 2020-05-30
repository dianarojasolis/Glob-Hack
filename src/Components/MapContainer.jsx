import React, { Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const MapContainer = (props) => {

    const UrlMap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    
    // const center= [-33.4163883, -70.660074]

    return (
        <Fragment>
            <Map
                center={props.center}
                zoom={props.zoom}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={UrlMap}
                />

                <Marker position={props.center}>
                    <Popup>
                        Esta es mi ubicación actual
                    </Popup>
                </Marker>
            </Map>

        </Fragment>
    )
}

export default MapContainer
