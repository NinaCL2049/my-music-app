import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function SwitchOnline({ handleSwitch }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onChange={handleSwitch} />}
        label="Online"
      />
    </FormGroup>
  );
}

export default SwitchOnline;


