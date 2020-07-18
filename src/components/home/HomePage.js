import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ContactUsForm from "./ContactUs";
import Hidden from "@material-ui/core/Hidden";
// import NewsCarousel from "./NewsCarousel";
// import NewsDesktop from "./NewsDesktop";
import partisanBanner from "../../assets/images/partisan.png";
import handsLogo from "../../assets/images/handsblackbg.png";
import heatmapBanner from "../../assets/images/heatmap_banner.png";
import heatmapHeader from "../../assets/images/header_heatmap.png";

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
    height: "40vh",
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
    minHeight: "40vh",
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
    // margin: "4vh 8vw",
    width: "52vw",
    fontSize: "38px",
    lineHeight: "1.2",
    fontFamily: "Anonymous Pro",
    fontWeight: "900",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      textAlign: "left",
    },
  },
  regionBtn: {
    fontFamily: "Manrope",
    textDecoration: "none",
    height: "52px",
    width: "320px",
    paddingTop: "6px",
    fontSize: "30px",
    color: "#fff",
    backgroundColor: "#248470",
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
            minHeight: "36vh",
            backgroundImage: `url(${heatmapBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-around",
          }}
        >
          {/* <img src={handsLogo} alt="two hands embracing" /> */}
          {/* <div>
            {" "}
            <img
              src={handsLogo}
              style={{ height: "60px", width: "60px", paddingLeft: "20px" }}
            />
          </div> */}
        </div>
        <div
          style={{
            height: "31vh",
            backgroundImage: `url(${heatmapHeader})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-around",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "10px",
              paddingLeft: "10vw",
              marginTop: "12vh",
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
        </div>
      </Hidden>
      <div className={classes.overviewContainer}>
        <h2
          className={classes.headerOverview}
          // style={{ margin: "20px 0 20px 20px" }}
        >
          Mutual Aid resources organized by U.S. State, in hopes to be more
          accessible, increase ease of involvement, mitigate duplicate effort in
          regions with existing projects, and survive social media platform
          censorship.
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

        <h2 className={classes.headerOverview} style={{ width: "60vw" }}>
          Select a state for mutual aid resources:
        </h2>
        <div
          className={classes.statesContainer}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <div className={classes.regionBtn}>ARIZONA</div>
          <a
            href="#FAQS"
            className={classes.regionBtn}
            alt="Link to Arizona Resources"
          >
            ARIZONA HERE
          </a>
          <div className={classes.regionBtn}>CALIFORNIA</div>
          <div className={classes.regionBtn}>OREGON</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
