import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import classNames from "classnames";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  cardMediaStyle: {
    height: 200,
  },

  root: {
    background: "transparent",
    transition: "transform 300ms ease-in-out",
    maxHeight: 600,
    minHeight: 400,
    minWidth: 175,
    borderRadius: 15,
    borderColor: "white",
  },

  title: {
    color: "white",
  },

  subheader: {
    color: "white",
  },
});

const ContentCard = (props) => {
  const classes = useStyles();

  const { id, title, subTitle, description, imgSrc, srcCodeUrl } = props;

  return (
    <motion.div
      animate={{
        scale: [0, 1.05, 0.98, 1],
        opacity: [0, 1],
      }}
      transition={{ duration: 0.92 }}
      whileHover={{ scale: 0.95 }}
    >
      <Card variant="outlined" classes={{ root: classes.root }}>
        <CardHeader
          classes={{
            title: classes.title,
            subheader: classes.subheader,
          }}
          action={
            <IconButton aria-label="settings" color={"secondary"}>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={subTitle}
        />
        <CardMedia className={classes.cardMediaStyle} image={imgSrc} />
        <CardContent>
          <Typography variant="body2" component="p" noWrap color={"secondary"}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color={"secondary"} href={srcCodeUrl}>
            Source Code
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ContentCard;
