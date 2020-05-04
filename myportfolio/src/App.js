import React, { useState } from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import Content from "./Content";
import Home from "./Home";
import About from "./About";

const useStyles = makeStyles((theme) => ({
  helloThereStyle: {
    fontStyle: "oblique",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flex: 1,
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
    <BrowserRouter>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
