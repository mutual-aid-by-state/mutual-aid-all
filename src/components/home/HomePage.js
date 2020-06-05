import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ContactUsForm from "./ContactUs";
import Hidden from "@material-ui/core/Hidden";
// import NewsCarousel from "./NewsCarousel";
// import NewsDesktop from "./NewsDesktop";
import partisanBanner from "../../assets/images/partisan.png";

const useStyles = makeStyles((theme) => ({
  headerOneMain: {
    fontFamily: "Londrina Solid",
    textAlign: "left",
    fontSize: "120px",
    paddingLeft: "6vw",
    color: "#b19cd9",
    // textShadow: "-12px 7px #000",
    textShadow: "2px 2px 12px black",
  },
  overviewContainer: {
    height: "400px",
    color: "#fff",
    backgroundColor: "#141414",
    fontSize: "36px",
    fontFamily: "",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      alignItems: "flex-start",
    },
  },
  headerOverview: {
    margin: "0 8vw",
    fontSize: "38px",
    fontFamily: "Quicksand",
    fontWeight: "900",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      textAlign: "left",
    },
  },
}));

// TODO abstract out inline styling for sections
const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Hidden only={["xs"]}>
        <div
          className="parallax"
          style={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h1 id="fadeText" className={classes.headerOneMain}>
            MUTUAL AID BY STATE
          </h1>
        </div>
      </Hidden>
      {/* TODO NEED FINALIZED MOBILE BANNER */}
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <div
          style={{
            height: "50vh",
            backgroundImage: `url(${partisanBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5% 10%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h1
            id="fadeText"
            style={{
              textAlign: "left",
              fontSize: "80px",
            }}
            className={classes.headerOneMain}
          >
            MUTUAL AID BY STATE
          </h1>
        </div>
      </Hidden>
      <div className={classes.overviewContainer}>
        <h2 className={classes.headerOverview}>
          MUTUAL AID RESOURCES ORGANIZED BY U.S. STATE, IN HOPES TO BE MORE
          ACCESSIBLE, INCREASE EASE OF INVOLVEMENT, MITIGATE DUPLICATE EFFORT IN
          REGIONS WITH EXISTING PROJECTS, AND SURVIVE SOCIAL MEDIA PLATFORM
          CENSORSHIP
        </h2>
        {/* <p className={classes.linkAboutContainer}>
          <a href="/about" className={classes.linkAboutOverview}>
            Learn More
          </a>
        </p> */}
      </div>
      <div className={classes.overviewContainer}>
        <h2 className={classes.headerOverview} style={{ textAlign: "left" }}>
          UNDER CONSTRUCTION, SELECT A STATE FOR MUTUAL AID RESOURCES:
        </h2>
        <div>Arizona</div>
      </div>
    </div>
  );
};

export default HomePage;
