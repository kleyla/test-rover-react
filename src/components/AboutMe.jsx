import React from "react";
import {
  Avatar,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "../hooks/useStyles";
import { thingsAboutMe } from "../mockData/thingsAboutMe";

const AboutMe = () => {
  const classes = useStyles();

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
                secondary={
                  <Typography variant="subtitle2">{item.text}</Typography>
                }
              ></ListItemText>
            </ListItem>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AboutMe;
