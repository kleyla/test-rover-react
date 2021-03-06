import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Icon,
  IconButton,
  Typography,
} from "@material-ui/core";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./MapGeneral.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { useStyles } from "../hooks/useStyles";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const LitleMap = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const seeMap = (place) => {
    props.history.push({
      pathname: "/map",
      state: place,
    });
  };

  return (
    <Card>
      <Collapse in={checked} collapsedHeight={250}>
        <CardContent>
          <Box>
            <Box mb={1}>
              <Typography variant="h6" align="center">
                {props.place.title}
              </Typography>
            </Box>
            <div className={classes.mapBox}>
              <MapContainer
                center={props.place.coords}
                zoom={16}
                className={classes.mapContLitleMap}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.place.coords}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <Box mt={2}>
              <Typography variant="h6">Coordenadas:</Typography>
              <Typography variant="subtitle1">
                {props.place.coords[0]} {props.place.coords[1]}
              </Typography>
              <Typography variant="h6">Description:</Typography>
              <Typography variant="body1">{props.place.description}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton color="primary" onClick={() => handleChange()}>
          {checked ? (
            <Icon>keyboard_arrow_up</Icon>
          ) : (
            <Icon>keyboard_arrow_down</Icon>
          )}
        </IconButton>
        <Link
          to={`/map/${
            props.place.title
          }/${props.place.coords[0].toString()}/${props.place.coords[1].toString()}`}
          className={classes.expand}
        >
          <Button size="small" color="primary">
            Watch more...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default LitleMap;
