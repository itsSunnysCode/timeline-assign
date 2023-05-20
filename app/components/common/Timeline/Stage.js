import React from "react";
import styles from "./Timeline.module.css";
import AddOutlinedIcon from "../../../assets/icons/AddOutlinedIcon";
import FilledAddIcon from "../../../assets/icons/FilledAddIcon";

import clsx from "clsx";

function Stage({ id, isAdded, content, isLast, isFirst, change }) {

  if (isAdded) {
    return (
      <div
        className={clsx(
          styles.stageParent,
          // !isAdded ? styles.stageNotAdded : null,
          isLast
            ? styles.last
            : isFirst
            ? styles.first
            : isAdded
            ? styles.middle
            : ""
        )}
        // onClick={() => change(content, true)}
      >
        {/* {!isAdded ? <AddOutlinedIcon /> : null}{" "} */}
        <p >{content}</p>
      </div>
    );
  } else {
    return (
      <div
      className={styles.nonAddedStageParent}
      // className={clsx(
      //   styles.stageParent,
      //   // !isAdded ? styles.stageNotAdded : null,
      //   isLast
      //     ? styles.last
      //     : isFirst
      //     ? styles.first
      //     : isAdded
      //     ? styles.middle
      //     : ""
      // )}
      // onClick={() => change(content, true)}
      >
        <div style={{marginRight:"30px"}}>
          {content?.map((d) => {
            return (
              <div key={d} className={styles.stageNotAdded} onClick={() => change(id,d, true)}>
                <AddOutlinedIcon />
                <p style={{ marginLeft: "10px" }}>{d}</p>
              </div>
            );
          })}
        </div>
        <div>
          <FilledAddIcon />
        </div>
      </div>
    );
  }
}

export default Stage;
