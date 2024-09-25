import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function VolumeSlider(props) {
  const [currentVolume, changeVolume] = useState('20');

  const handleChange = (event) => {
    const newVolume = event.target.value;
    changeVolume(newVolume);
    props.handleSlider(newVolume)
  };

  return (
    <Box sx={{ width: 300 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown />

        <Slider
          defaultValue={20}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
}

export default VolumeSlider;
