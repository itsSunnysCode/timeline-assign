import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";
import styles from "./Button.module.css";

function Btn({ isPrimary, onClick, children, ...props }) {
  return (
    <Button
      className={clsx(
        styles.root,
        isPrimary ? styles.primary : styles.secondary
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default Btn;
