import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function SelectQuality(props) {
  const [quality, setQuality] = React.useState('20');

  const handleChange = (event) => {
    const newQuality = event.target.value;
    setQuality(newQuality);
    props.handleSelect(newQuality);

}

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl autoWidth='true'>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="Quality"
          onChange={handleChange}
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Normal</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );

}

export default SelectQuality;


