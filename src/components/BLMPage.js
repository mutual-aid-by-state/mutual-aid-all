import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// import placeholderBanner from "../../assets/images/banner_placeholder.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    // bottom: 0,
    color: "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-around",
    // background: `url(${placeholderBanner}) no-repeat center`

    [theme.breakpoints.up("xs")]: {
      // color: "red",
      // width: "60vw",
    },
  },
}));

const BLMPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>BLM COMPILATION OF RESOURCES</div>
      <div>Legal Aid</div>
      <div>Protesting</div>
      <p>
        Huge thank you and all credit to black, BIPOC and POC activists for
        crowdsourcing and consolidating these resources.
      </p>
    </div>
  );
};

export default BLMPage;
