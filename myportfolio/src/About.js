import React, { useState } from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";

import Header from "./Header";
import AboutContent from "./AboutContent";

const useStyles = makeStyles((theme) => ({
  helloThereStyle: {
    fontStyle: "oblique",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  contentStyle: {
    marginTop: "5em",
    marginBottom: "5em",
    spacing: "4",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container className={classes.contentStyle}>
        <Grid item xs={0} sm={1} lg={2} />
        <Grid item xs={12} sm={10} lg={8}>
          <AboutContent />
        </Grid>
        <Grid item xs={0} sm={1} lg={2} />
      </Grid>
    </Grid>
  );
}

export default App;
