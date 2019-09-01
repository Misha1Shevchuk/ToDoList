import React from "react";

import WorkSpace from "./WorkSpace";

const Content = ({ match }) => (
  <div className="content">
    <WorkSpace activeProjectId={match.params.id} />
  </div>
);

export default Content;
