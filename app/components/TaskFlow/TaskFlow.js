import React, { useState } from "react";
import styles from "./Task.module.css";
import Button from "../common/Button";
import SecurityChecks from "./SecurityChecks";
import Timeline from "../common/Timeline";
import clsx from "clsx";
const stagesTemp = [
  {
    isAdded: true,
    content: "GIT Checkout",
    mandatory: true,
  },
  {
    isAdded: false,
    content: "Code Analysis",
    mandatory: false,
  },
  {
    isAdded: false,
    content: "Credential Scan",
    mandatory: false,
  },
  {
    isAdded: true,
    content: "Docker Build",
    mandatory: true,
  },
  {
    isAdded: false,
    content: "Docker Image Scan",
    mandatory: false,
  },
  {
    isAdded: true,
    content: "Docker Push",
    mandatory: true,
  },
];
function TaskFlow() {
  const [stages, setStages] = useState(stagesTemp);

  const change = (content, status) => {
    const tempStages = [...stages];
    const changeElement = tempStages.find((stage) => stage.content === content);
    changeElement.isAdded = status;
    setStages(tempStages);
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.heading}>Build config</p>
        <div>
          <Button style={{ marginRight: "16px" }}>Cancel</Button>
          <Button isPrimary>Save</Button>
        </div>
      </div>
      <div className={styles.main}>
        <div className={clsx(styles.flex50, styles.flow)}>
          <Timeline 
          stages={stages} 
          change={change}
          />
        </div>
        <div className={clsx(styles.flex50, styles.scCheck)}>
          <SecurityChecks
            stages={stages}
            setStages={setStages}
            change={change}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskFlow;
