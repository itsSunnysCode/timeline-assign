import React from "react";
import Stage from "./Stage";
import styles from "./Timeline.module.css";
function Timeline({ stages, change }) {
  return (
    <div className={styles.timeline}>
      <p className={styles.timelineHeader}>Task Flow</p>
      <div className={styles.stagesRoot}>
        <div className={styles.stagesParent}>
          {stages.map((stage, i) => {
            const isFirst = i === 0;
            const isLast = i == stages.length - 1;
            return (
              <div key={stage.content} style={{position:"relative"}}>
                <Stage
                  isAdded={stage.isAdded}
                  content={stage.content}
                  isFirst={isFirst}
                  isLast={isLast}
                  change={change}
                  id={stage.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
