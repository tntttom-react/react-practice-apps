import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 0.95,
    color: "white",
  },

  linkStyle: {
    textDecoration: "none",
  },

  headerButton: {
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <motion.div
      animate={{
        opacity: [0, 0.3, 0.7, 1],
      }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="static" elevation={0} color={"transparent"}>
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Tommy Nguyen
          </Typography>

          <Link to="/" className={classes.linkStyle}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <Button classes={{ root: classes.headerButton }}>Projects</Button>
            </motion.div>
          </Link>

          <Link to className={classes.linkStyle}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <Button classes={{ root: classes.headerButton }}>Design</Button>
            </motion.div>
          </Link>

          <Link to="/about" className={classes.linkStyle}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <Button classes={{ root: classes.headerButton }}>About</Button>
            </motion.div>
          </Link>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;
