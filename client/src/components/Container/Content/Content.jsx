import React from "react";

import WorkSpace from "../WorkSpace/WorkSpace";
import classes from "./Content.module.css";

const Content = ({ match }) => (
  <div className={classes.content}>
    <WorkSpace activeProjectId={match.params.id} />
  </div>
);

export default Content;
