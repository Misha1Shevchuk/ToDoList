import React from "react";

import NotepadImg from "../../svg/NotepadImg";
import classes from "./Content.module.css";

const EmptyContent = () => (
  <div className={classes.content}>
    <NotepadImg className={classes.img}/>
  </div>
);

export default EmptyContent;
