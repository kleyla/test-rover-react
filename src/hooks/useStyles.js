import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const drawerWidth = 220;

export const useStyles = makeStyles((theme) => ({
  // Main
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    background: "red",
  },
  //    Home
  title: {
    marginBottom: "16px",
    marginTop: "8px",
  },
  //   Maps
  titleMap: {
    flexGrow: 1,
  },
  //   About me
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
  //   BigMap
  mapCont: {
    width: "100%",
    height: "500px",
  },
  //   DraggableMap
  mapContDraggable: {
    width: "100%",
    height: "300px",
  },
  //   Footer
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
  iconWhite: {
    color: "white",
  },
  //   LitleBox
  litleBox: {
    backgroundColor: (props) => props.color,
    display: "inline-block",
    padding: "8px",
  },
  iconlitleBox: {
    fontSize: "45px",
    color: "white",
  },
  //   LitleMap
  mapContLitleMap: {
    width: "300px",
    height: "300px",
  },
  mapBox: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  expand: {
    marginLeft: "auto",
    textDecoration: "none",
  },
  mapContMapGeneral: {
    width: "100%",
    height: "400px",
  },
  //   Modal
  rootModal: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  //   Navbar
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  titleLight: {
    color: purple[200],
  },
  titleNavbar: {
    flexGrow: 1,
    textDecoration: "none",
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
    backgroundColor: theme.palette.common.white,
  },
  //   Sidebar
  drawer: {
    width: 240,
    flexShink: 0,
  },
  drawerPaper: {
    width: 240,
    background: theme.palette.primary.main,
    color: "white",
  },
  toolbarSidebar: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  textWhite: {
    color: "white",
  },
}));
