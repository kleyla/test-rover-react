import React from "react";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  imagen: {
    width: "100%",
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
    width: "100%",
    height: "auto",
  },
}));
const Galeria = () => {
  const classes = useStyles();
  const pictures = [
    {
      src: "/flisol2019.jpg",
      title: "FLISOL 2019, Santa Cruz, Bolivia",
      by: "Someone",
    },
    {
      src: "/feriaLibro.jpg",
      title: "Feria del libro 2019, Santa Cruz, Bolivia",
      by: "Someone",
    },
    { src: "/innovaw.jpg", title: "Innova Women 2019", by: "Someone" },
    {
      src: "/hackmeetinglp2019.jpg",
      title: "Hackmeeting 2019, La Paz, Bolivia",
      by: "Someone",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Typography variant="h5" color="primary" align="center">
          Pictures
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <GridList cellHeight="auto" cols={4} className={classes.gridList}>
          {pictures.map((item, index) => {
            return (
              <GridListTile cols={1} key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/me/${item.src}`}
                  alt="girls"
                  className={classes.imagen}
                />
                <GridListTileBar
                  title={item.title}
                  subtitle={<span>by: {item.by}</span>}
                  actionIcon={
                    <IconButton aria-label="info" className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            );
          })}
        </GridList>
      </Grid>
    </Grid>
  );
};

export default Galeria;
