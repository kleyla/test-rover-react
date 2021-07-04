import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapGeneral.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useStyles } from "../hooks/useStyles";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// initial location on map
const position = [-17.7865297, -63.1795071];
// array of locations
const locations = [
  [-17.7804443, -63.1879617],
  [-17.7838959, -63.1823237],
  [-17.7757732, -63.1928955],
  [-17.7754388, -63.2003477],
  [-17.789106, -63.1642202],
];

const MapGeneral = () => {
  const classes = useStyles();

  return (
    <MapContainer
      center={position}
      zoom={13}
      className={classes.mapContMapGeneral}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((item, index) => (
        <Marker position={item} key={index}>
          <Popup>here!</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapGeneral;
