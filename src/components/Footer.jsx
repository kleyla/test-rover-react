import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  foo: {
    backgroundColor: "red",
    margin: 0,
  },
  list: {
    display: "flex",
    justifyContent: "center",
  },
  listHorizontal: {
    display: "inline-block",
    backgroundColor: "red",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const socialList = [
    { icon: <GitHub />, link: "https://github.com/kleyla", text: "Kleyla" },
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/karenleyla.rodriguez",
      text: "Karen Rodriguez",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/karen.codes?r=nametag",
      text: "Karen Rodriguez",
    },
    {
      icon: <Twitter />,
      link: "https://twitter.com/KLEYLA1",
      text: "Karen Rodriguez",
    },
  ];
  return (
    <Grid container spacing={2}>
      {socialList.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Link href={item.link} target="_blank" rel="noreferrer">
                <ListItem>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              </Link>
            </Grid>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          &copy; Karen Rodriguez
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
