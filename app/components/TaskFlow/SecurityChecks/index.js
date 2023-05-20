import React, { useMemo } from "react";
import styles from "./SecurityChecks.module.css";
import Switch from "../../common/Switch";

function SecurityChecks({ stages, change }) {
  const contents = useMemo(() => {
    const res = [];
    stages
      ?.filter?.((stage) => !stage?.mandatory)
      ?.forEach((d) => {
        d.content.forEach((p) => res.push({ id: d.id, content: p }));
      });
    return res;
  }, [stages]);
  return (
    <div className={styles.root}>
      <p className={styles.heading}>Security Checks</p>
      <div>
        {contents.map((stage) => {
          return (
            <div className={styles.switchExtra} key={stage.content}>
              <Switch
                label={stage.content}
                onChange={(e) =>
                  change(stage.id, stage.content, e.target.checked)
                }
                checked={stages.some(
                  (d) => d.content.includes(stage.content) && d.isAdded
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecurityChecks;
