import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  Paper,
  Typography,
} from "@material-ui/core";

import { useStyles } from "../hooks/useStyles";

const LitleBox = (props) => {
  const classes = useStyles(props);

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="row">
          <Paper className={classes.litleBox} elevation={0}>
            <Icon className={classes.iconlitleBox}>{props.icon}</Icon>
          </Paper>
          <Box flex={1} display="flex" flexDirection="column">
            <Typography display="block" variant="overline" align="right">
              {props.text}
            </Typography>
            <Typography variant="h5" align="right">
              {props.cantidad}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default LitleBox;
