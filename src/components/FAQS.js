import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
// TODO expansion icon/s
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

let faqsJSON = require("./faqs.json");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    // background: "#171717",
    fontSize: "28px",
  },
  faqPanel: {
    backgroundColor: "#171717",
    color: "#fff",
    border: "1px solid #fff",
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: "80%",
    fontFamily: "Londrina Solid",
    flexShrink: 0,
  },
  summary: {
    fontFamily: "Lato",
    fontSize: theme.typography.pxToRem(18),
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
        <Typography className={classes.summary}>
          {faqPanel.key === "faqsSection1" ||
          ("faqsSection2" && faqPanel.boldText)
            ? faqPanel.boldText + faqPanel.summary
            : faqPanel.summary}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));

  return <div className={classes.root}>{faqPanels}</div>;
}
