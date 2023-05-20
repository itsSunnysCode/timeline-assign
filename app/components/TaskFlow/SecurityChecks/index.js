import React from "react";
import styles from "./SecurityChecks.module.css";
import Switch from "../../common/Switch";

function SecurityChecks({ stages, setStages, change }) {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>Security Checks</p>
      <div>
        {stages
          ?.filter?.((stage) => !stage?.mandatory)
          ?.map((stage) => {
            return (
              <div className={styles.switchExtra} key={stage.content}>
                <Switch
                  
                  label={stage.content}
                  onChange={(e) => change(stage.content, e.target.checked)}
                  checked={stage.isAdded}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SecurityChecks;
