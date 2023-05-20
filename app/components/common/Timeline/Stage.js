import React from "react";
import styles from "./Timeline.module.css";
import AddOutlinedIcon from "../../../assets/icons/AddOutlinedIcon";
import clsx from "clsx";
function Stage({ isAdded, content, isLast, isFirst, change }) {
  return (
    <div
      className={clsx(
        styles.stageParent,
        !isAdded ? styles.stageNotAdded : null,
        isLast
          ? styles.last
          : isFirst
          ? styles.first
          : isAdded
          ? styles.middle
          : ""
      )}
      onClick={()=>change(content,true )}
    >
      {!isAdded ? <AddOutlinedIcon /> : null}{" "}
      <p style={{ marginLeft: "10px" }}>{content}</p>
    </div>
  );
}

export default Stage;
