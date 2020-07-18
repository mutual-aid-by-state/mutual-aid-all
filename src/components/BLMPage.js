import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// import FAQS from "./AZ";

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
    alignItems: "center",
    // background: `url(${placeholderBanner}) no-repeat center`

    [theme.breakpoints.up("xs")]: {
      // color: "red",
      // width: "60vw",
    },
  },
  header: {
    fontFamily: "Londrina Solid",
    fontSize: "50px",
    padding: "0 5vw",
  },
}));

const BLMPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>BLM COMPILATION OF RESOURCES</div>
      {/* <FAQS /> */}
      <p
        style={{ fontFamily: "Quicksand", padding: "0 6vw", fontSize: "12px" }}
      >
        Huge thank you and all credit to @botanicaldyke and black, BIPOC and POC
        activists for crowdsourcing, organizing and sharing these resources
        &hearts;
      </p>
    </div>
  );
};

export default BLMPage;
