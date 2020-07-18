import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
// TODO expansion icon/s
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

let faqsJSON = require("./az.json");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: "#171717",
    fontSize: "28px",
    color: "#fff",
  },
  regionHeader: {
    fontFamily: "Anonymous Pro",
    marginTop: "40px",
    textAlign: "center",
    fontSize: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  },
  regionPanels: {
    width: "80vw",
  },
  faqPanel: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "0px !important",
    margin: "20px 0px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: "80%",
    fontFamily: "Manrope",
    flexShrink: 0,
  },
  summary: {
    fontFamily: "Manrope",
    // color: "#FF704E",
    fontSize: theme.typography.pxToRem(18),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  summaryTitle: {
    margin: "0 40px 0 0",
    color: "#000",
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqPanels = faqsJSON.map((faqPanel) => (
    <ExpansionPanel
      className={classes.faqPanel}
      key={faqPanel.key}
      expanded={expanded === faqPanel.key}
      onChange={handleChange(faqPanel.key)}
    >
      <ExpansionPanelSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls={faqPanel.key + "-content"}
        id={faqPanel.key + "-header"}
      >
        <Typography className={classes.heading}>{faqPanel.header}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {/* TODO selectively bold text */}
        <Typography className={classes.summary} style={{ display: "flex" }}>
          <p className={classes.summaryTitle}>{faqPanel.summary}</p>
          <a
            href={faqPanel.link}
            style={{ textDecoration: "none", color: "#FF704E" }}
            alt="Link to resource"
          >
            Learn more
          </a>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));

  return (
    <div className={classes.root}>
      <h1 className={classes.regionHeader}>Arizona Resources</h1>
      <div className={classes.regionPanels}>{faqPanels}</div>
    </div>
  );
}
