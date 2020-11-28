import { makeStyles } from "@material-ui/core";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapGeneral.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const center = {
  lat: -17.7834936,
  lng: -63.1820853,
};
const useStyles = makeStyles((theme) => ({
  mapCont: {
    width: "300px",
    height: "300px",
  },
}));

function DraggableMarker(props) {
  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          //   console.log(marker.getLatLng());
          props.getCoords([marker.getLatLng().lat, marker.getLatLng().lng]);
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

const DraggableMap = (props) => {
  const classes = useStyles();
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className={classes.mapCont}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker getCoords={props.getCoords} />
    </MapContainer>
  );
};

export default DraggableMap;
