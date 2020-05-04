import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { motion, Frame } from "framer-motion";

const AboutContent = () => {
  return (
    <div>
      <motion.div
        animate={{ opacity: [0, 0.4, 0.7, 1] }}
        transition={{ duration: 0.8 }}
      >
        <Grid container spacing={4} style={{ marginTop: 40 }}>
          <Grid container direction="column" alignContent="center">
            <div>
              <Typography
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 86,
                  fontFamily: "Roboto",
                }}
              >
                Hi. I'm Tommy.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default AboutContent;
