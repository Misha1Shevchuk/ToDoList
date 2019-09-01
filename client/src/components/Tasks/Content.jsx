import React from "react";

import WorkSpace from "./WorkSpace";

const Content = ({match}) => (
    <div className="content">
      <h1>{match.params.id}</h1>
      <WorkSpace activeProjectId={match.params.id}/>
    </div>)

export default Content;
