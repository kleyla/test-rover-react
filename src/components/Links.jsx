import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "../hooks/useStyles";
import { links } from "../mockData/links";

const Links = () => {
  const classes = useStyles();

  return (
    <div>
      <List component="nav">
        {links.map((link, index) => {
          return (
            <ListItem button component={Link} to={link.route} key={index}>
              <ListItemIcon>
                <Icon className={classes.iconWhite}>{link.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          );
        })}
        <Divider />
      </List>
    </div>
  );
};

export default Links;
