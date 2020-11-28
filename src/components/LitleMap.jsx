import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapGeneral.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const useStyles = makeStyles((theme) => ({
  mapCont: {
    width: "300px",
    height: "300px",
  },
  mapBox: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
}));

const LitleMap = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    console.log("CLICK");
    setChecked(!checked);
  };

  return (
    <Card>
      <Collapse in={checked} collapsedHeight={250}>
        <CardContent>
          <Box>
            <Box mb={1}>
              <Typography variant="h6" align="center">{props.place.title}</Typography>
            </Box>
            <div className={classes.mapBox}>
              <MapContainer
                center={props.place.coords}
                zoom={16}
                className={classes.mapCont}
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
              <Typography variant="h6">Description:</Typography>
              <Typography variant="body1">{props.place.description}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
      <CardActions>
        <Button size="small" onClick={() => handleChange()}>
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default LitleMap;
