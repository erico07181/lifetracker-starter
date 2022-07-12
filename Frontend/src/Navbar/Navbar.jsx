import * as React from "react";
import "./Navbar.css";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#F0EBE3",
      borderBottom: "1px solid white",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className="navbar">
        <Link to="/" className={classes.link}>
          <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" />
        </Link>
        <div className="navLinks">
          <Link to="/activity" className={classes.link}>
            Activity
          </Link>
          <Link to="/exercise" className={classes.link}>
            Exercise
          </Link>
          <Link to="/nutrition" className={classes.link}>
            Nutrition
          </Link>
          <Link to="/sleep" className={classes.link}>
            Sleep
          </Link>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
          <Link to="/register" className={classes.link}>
            <button className="btn_primary">Sign Up</button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
