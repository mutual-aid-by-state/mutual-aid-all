import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ContactUsForm from "./ContactUs";
import Hidden from "@material-ui/core/Hidden";
// import NewsCarousel from "./NewsCarousel";
// import NewsDesktop from "./NewsDesktop";
import partisanBanner from "../../assets/images/partisan.png";
import handsLogo from "../../assets/images/handsblackbg.png";

const useStyles = makeStyles((theme) => ({
  headerOneMain: {
    fontFamily: "Anonymous Pro",
    textAlign: "left",
    fontSize: "46px",
    width: "30%",
    paddingLeft: "6vw",
    color: "#fff",
    // textShadow: "-12px 7px #000",
    textShadow: "2px 2px 3px black",
    marginBottom: "0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "60px",
    },
  },
  overviewContainer: {
    height: "36vh",
    color: "#000",
    backgroundColor: "#fff",
    // backgroundColor: "#141414",
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
  overviewContainer2: {
    backgroundColor: "#000",
    color: "#fff",
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
    margin: "4vh 8vw",
    width: "60vw",
    fontSize: "38px",
    fontFamily: "Anonymous Pro",
    fontWeight: "900",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      textAlign: "left",
    },
  },
  regionBtn: {
    fontFamily: "Manrope",
    backgroundColor: "#248470",
    padding: "20px",
    margin: "10px",
    border: "1px solid #000",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff",
      color: "#000",
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
            email mabscov19@gmail.com to submit resources
          </h1>
        </div>
      </Hidden>
      {/* TODO NEED FINALIZED MOBILE BANNER */}
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <div
          style={{
            height: "48vh",
            backgroundImage: `url(${handsLogo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "165px",
            backgroundPosition: "bottom right",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-around",
          }}
        >
          <h1
            id="fadeText"
            style={{
              textAlign: "left",
            }}
            className={classes.headerOneMain}
          >
            MUTUAL AID BY STATE
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              paddingLeft: "10vw",
              marginTop: "0",
            }}
          >
            &hearts; email
            <br />
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
              mabscov19@gmail.com
            </span>
            <br />
            to submit resources
          </p>
          {/* <img src={handsLogo} alt="two hands embracing" /> */}
          {/* <div>
            {" "}
            <img
              src={handsLogo}
              style={{ height: "60px", width: "60px", paddingLeft: "20px" }}
            />
          </div> */}
        </div>
      </Hidden>
      <div className={classes.overviewContainer}>
        <h2
          className={classes.headerOverview}
          style={{ margin: "20px 0 20px 20px" }}
        >
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
      <div className={classes.overviewContainer2}>
        {/* <a
          href="#BLM"
          style={{
            fontFamily: "Manrope",
            backgroundColor: "#0038C3",
            color: "#fff",
            textAlign: "center",
            fontSize: "24px",
            paddingTop: "24px",
            textAlign: "center",
            width: "520px",
            height: "82px",
          }}
        >
          &#x2665; BLACK LIVES MATTER LIST HERE
        </a> */}

        <h2 className={classes.headerOverview} style={{ textAlign: "left" }}>
          SELECT A STATE FOR MUTUAL AID RESOURCES:
        </h2>
        <div
          className={classes.statesContainer}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className={classes.regionBtn}>ARIZONA</div>
          <div className={classes.regionBtn}>CALIFORNIA</div>
          <div className={classes.regionBtn}>OREGON</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
