import React, { Component } from "react";
import "./score.css";
import { Fade } from "react-reveal";
import { scorecards } from "../../portfolio";
import ScoreCard from "../../components/scoreCard/ScoreCard";

class Scores extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Score Cards
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {scorecards.scorecards.map((cert) => {
            return <ScoreCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Scores;
