import { Box, Button, Typography, Select, MenuItem, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";

export default function WelcomePage() {
  const [selectedProject, setSelectedProject] = useState("");

  const chooseProject = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <Box sx={styles.parentContainer}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", color: "#000000", marginTop: "2rem" }}
      >
        CORE'S NLP APP
      </Typography>

      <Box sx={styles.mainContainer}>
        <Select
          label="Please select your Project"
          value={selectedProject}
          onChange={chooseProject}
          input={<OutlinedInput  label ="please select a projext" />}
        >
          <MenuItem value="project1">Project1</MenuItem>
          <MenuItem value="project2">Project2</MenuItem>
          <MenuItem value="project3">Project3</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
