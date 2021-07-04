import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

import BigMapa from "../components/BigMapa";

const Mapa = () => {
  const { title, lat, lng } = useParams();
  const coords = [parseFloat(lat), parseFloat(lng)];

  return (
    <div>
      <Typography variant="subtitle1">{title}</Typography>
      <Box mt={2}>
        <BigMapa coords={coords} />
      </Box>
    </div>
  );
};

export default Mapa;
