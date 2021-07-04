import React from "react";
import {
  Box,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import { socialList } from "../mockData/socialList";

const Footer = () => {
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
        <Box mt={2}>
          <Typography variant="h6" align="center">
            &copy; Karen Rodriguez
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
