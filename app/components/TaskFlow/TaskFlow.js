import React, { useState } from "react";
import styles from "./Task.module.css";
import Button from "../common/Button";
import SecurityChecks from "./SecurityChecks";
import Timeline from "../common/Timeline";
import clsx from "clsx";
const stagesTemp = [
  { id: 1, isAdded: true, content: ["GIT Checkout"], mandatory: true },
  {
    id: 2,
    isAdded: false,
    content: ["Code Analysis", "Credential Scan"],
    mandatory: false,
  },
  { id: 3, isAdded: true, content: ["Docker Build"], mandatory: true },
  { id: 4, isAdded: false, content: ["Docker Image Scan"], mandatory: false },
  { id: 5, isAdded: true, content: ["Docker Push"], mandatory: true },
];
function TaskFlow() {
  const [stages, setStages] = useState(stagesTemp);
//TODO:optimize this function
  const change = (id, content, status) => {
    const tempStages = [...stages];
    const result = tempStages.find((d) => id == d.id);
    if (status) {
      if (result.content.length > 1) {
        tempStages.splice(1, 1);
        if (content === "Code Analysis") {
          tempStages.splice(1, 0, {
            id: 2,
            isAdded: true,
            content: ["Code Analysis"],
            mandatory: false,
          });
          tempStages.splice(2, 0, {
            id: 21,
            isAdded: false,
            content: ["Credential Scan"],
            mandatory: false,
          });
        } else {
          tempStages.splice(1, 0, {
            id: 2,
            isAdded: false,
            content: ["Code Analysis"],
            mandatory: false,
          });
          tempStages.splice(2, 0, {
            id: 21,
            isAdded: true,
            content: ["Credential Scan"],
            mandatory: false,
          });
        }
      } else {
        result.isAdded = status;
      }
    } else {
      if (content === "Code Analysis") {
        if (
          tempStages.some(
            (d) => d.content.includes("Credential Scan") && !d.isAdded
          )
        ) {
          tempStages.splice(2, 1);
          tempStages.splice(1, 1);

          tempStages.splice(1, 0, {
            id: 2,
            isAdded: false,
            content: ["Code Analysis", "Credential Scan"],
            mandatory: false,
          });
        } else {
          result.isAdded = status;
        }
      } else if (content === "Credential Scan") {
        if (
          tempStages.some(
            (d) => d.content.includes("Code Analysis") && !d.isAdded
          )
        ) {
          tempStages.splice(2, 1);
          tempStages.splice(1, 1);

          tempStages.splice(1, 0, {
            id: 2,
            isAdded: false,
            content: ["Code Analysis", "Credential Scan"],
            mandatory: false,
          });
        } else {
          result.isAdded = status;
        }
      } else {
        result.isAdded = status;
      }
    }

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
          <Timeline stages={stages} change={change} />
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
