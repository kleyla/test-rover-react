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

const Links = () => {
  const links = [
    { icon: "home", text: "Home", route: "/" },
    { icon: "info", text: "About", route: "/about" },
    { icon: "maps", text: "Maps", route: "/maps" },
  ];

  return (
    <div>
      <List component="nav">
        {links.map((link, index) => {
          return (
            <ListItem button component={Link} to={link.route} key={index}>
              <ListItemIcon>
                <Icon>{link.icon}</Icon>
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
