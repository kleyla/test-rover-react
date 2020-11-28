import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  litleBox: {
    backgroundColor: (props) => props.color,
    display: "inline-block",
    padding: "8px",
  },
  icono: {
    fontSize: "45px",
    color: "white",
  },
});

const LitleBox = (props) => {
  const classes = useStyles(props);

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="row">
          <Paper className={classes.litleBox} elevation={0}>
            <Icon className={classes.icono}>{props.icon}</Icon>
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
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
};

export default LitleBox;
