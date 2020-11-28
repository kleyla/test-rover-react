import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import LitleBox from "../components/LitleBox";
import theme from "../themConfig";
import MapGeneral from "../components/MapGeneral";

const useStyles = makeStyles({
  title: {
    marginBottom: "16px",
    marginTop: "8px",
  },
});
const Home = () => {
  const classes = useStyles();
  const cajitas = [
    {
      icon: "folder",
      text: "Files",
      cantidad: 34,
      color: theme.palette.secondary.main,
    },
    {
      icon: "account_balance",
      text: "Places",
      cantidad: 20,
      color: theme.palette.info.main,
    },
    {
      icon: "assignment_ind",
      text: "Assigments",
      cantidad: 10,
      color: theme.palette.success.main,
    },
    {
      icon: "calendar_today",
      text: "Calendar",
      cantidad: 12,
      color: theme.palette.error.main,
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle1">Home</Typography>
          </Box>
        </Grid>
        {cajitas.map((cajita, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <LitleBox
                icon={cajita.icon}
                text={cajita.text}
                cantidad={cajita.cantidad}
                color={cajita.color}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" className={classes.title}>
              Map with react-leaflet
            </Typography>
            <MapGeneral />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
