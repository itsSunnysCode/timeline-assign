import React,{useState} from "react";
import styles from "./Timeline.module.css";
import AddOutlinedIcon from "../../../assets/icons/AddOutlinedIcon";
import FilledAddIcon from "../../../assets/icons/FilledAddIcon";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import clsx from "clsx";

function Stage({ id, isAdded, content, isLast, isFirst, change, newStage }) {
  const [showClose, setShowClose] = useState(false)
  if (isAdded) {
    if (content.includes("blank")) {
      return (
        <div className={styles.stageParentAddIcon} onClick={() => newStage('add')}>
          <FilledAddIcon />
        </div>
      );
    } else {
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
          onMouseEnter={()=>content.includes("new stage")?setShowClose(true):null}
          onMouseLeave={()=>content.includes("new stage")?setShowClose(false):null}
          // onClick={() => change(content, true)}
        >
          {/* {!isAdded ? <AddOutlinedIcon /> : null}{" "} */}
          {showClose && content.includes("new stage") ? (
            <span className={styles.closeIcon} onClick={()=>newStage('delete')}>
              <CloseOutlinedIcon />
            </span>
          ) : null}
          <p>{content}</p>
        </div>
      );
    }
  } else {
    return (
      <div className={styles.nonAddedStageParent}>
        <div style={{ marginRight: "30px" }}>
          {content?.map((d) => {
            return (
              <div
                key={d}
                className={styles.stageNotAdded}
                onClick={() => change(id, d, true)}
              >
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
