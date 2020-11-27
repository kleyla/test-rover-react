import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { makeStyles } from "@material-ui/core";
import L from "leaflet";
import "./MapGeneral.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import theme from "../themConfig";

const styles = makeStyles((theme) => ({
  mapCont: {
    width: "500px",
    height: "auto",
  },
  fondo: {
    background: "red",
    display: "flex",
    flex: 1,
    width: "300px",
    height: "auto",
  },
}));
// initial location on map
const position = [-43.5321, 172.6362];
// array of locations
const locations = [
  [-43.531, 172.6372],
  [-43.5311, 172.6392],
  [-43.5321, 172.6312],
  [-43.5331, 172.6332],
  [-43.5341, 172.6352],
];

const MapGeneral = () => {
  const classes = styles();
  React.useEffect(() => {
    // const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <div className={classes.fondo}>
      <Map center={position} zoom={13} className={classes.mapCont}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((item) => (
          <Marker position={item}></Marker>
        ))}
      </Map>
    </div>
  );
};

export default MapGeneral;
