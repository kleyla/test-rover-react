import {
  Avatar,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Icon,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  imagen: {
    width: "100%",
    height: "auto",
  },
  number: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
    width: "100%",
    height: "auto",
  },
}));
const AboutMe = () => {
  const classes = useStyles();
  const thingsAboutMe = [
    {
      title: "En principio...",
      text: "Mi nombre es Karen Rodriguez, soy de Bolivia.",
    },
    {
      title: "Estudios...",
      text:
        "Estudio Ingeniera en Sistemas en la Universidad Autónoma Gabriel René Moreno. Me gusta estar en constante aprendizaje, por ello he aprendido varios idiomas como ingles, frances y portugues, tengo planeado seguir con aleman.",
    },
    {
      title: "Hobbies",
      text:
        "Me encanta pintar con acuarelas y hacer lettering. En deportes solo me gusta trotar y nadar.",
    },
    {
      title: "Comunidades",
      text:
        "Soy fanatica de apoyar a comunidades de programacion y Software Libre como la GDG, y Nucleo Linux.",
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" color="primary" align="center">
          About me...
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={6}>
        <GridList cellHeight="auto" className={classes.gridList}>
          <GridListTile cols={2}>
            <img
              src={`${process.env.PUBLIC_URL}/me/hackmeetonglp.jpg`}
              alt="girls"
              className={classes.imagen}
            />
            <GridListTileBar
              title="Hackmeeting 2019, La paz"
              subtitle={<span>by: me</span>}
              actionIcon={
                <IconButton aria-label="info" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={6}>
        {thingsAboutMe.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar className={classes.number}>{index + 1}.</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={<Typography>{item.text}</Typography>}
              ></ListItemText>
            </ListItem>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AboutMe;
