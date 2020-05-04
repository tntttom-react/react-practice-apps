import React from "react";
import ContentCard from "./contentCard";
import projectList from "./constants";

import { Grid, Typography } from "@material-ui/core";

import { motion } from "framer-motion";

const Content = () => {
  const getProjectCards = (projectObj) => {
    const { id, title, subTitle, description, imgSrc, srcCodeUrl } = projectObj;

    return (
      <Grid item xs={12} sm={4}>
        <ContentCard {...projectObj} id={id} />
      </Grid>
    );
  };

  return (
    <div>
      <motion.div
        animate={{ opacity: [0, 0.4, 0.7, 1] }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 42,
            fontFamily: "Roboto",
          }}
        >
          Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4} style={{ marginTop: 40 }}>
        {projectList.map((projectObj) => getProjectCards(projectObj))}
      </Grid>
    </div>
  );
};

export default Content;
