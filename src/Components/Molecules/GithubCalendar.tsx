import React, { useEffect } from "react";
import GithubActivityCalendar from "github-calendar";
import { Helmet } from "react-helmet";

import "./GithubCalendar.scss";
import Subtitle from "../Atoms/Subtitle";

interface Props {
  username: string;
}


/**
 * Renders a github contributions 
 * activity calendar.
 *
 * @return {*}  {JSX.Element}
 */
const GithubCalendar: React.FC<Props> = (props): JSX.Element => {

  /**
   * Set up a github calendar
   */
  useEffect(() => {
    GithubActivityCalendar(".github-calendar__calendar", props.username, {
      responsive: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
        />
      </Helmet>
      <div className="github-calendar">
        <Subtitle className="github-calendar__title">My contributions</Subtitle>
        <div className="github-calendar__calendar"></div>
      </div>
    </>
  );
};

export default GithubCalendar;
