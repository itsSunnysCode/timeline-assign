import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import styles from "./Switch.module.css"
const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#0496FF",
    "&:hover": {
      backgroundColor: alpha("#0496FF", 0.1),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#0496FF",
  },
}));


export default function ColorSwitches({ label, onChange, checked, ...props }) {
  return (
    <div className={styles.root}>
      <CustomSwitch  onChange={onChange} checked={checked} {...props} />
      <p className={styles.switchLabel}>{label}</p>
    </div>
  );
}
