import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";

export default function WelcomePage() {
  const [selectedProject, setSelectedProject] = useState("");

  const chooseProject = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <Box sx={styles.parentContainer}>
      <Box sx={styles.typographyContainer}>
        <Typography variant="h3" component="h3" sx={styles.typography}>
          CORE'S NLP APP
        </Typography>
      </Box>

      <Box sx={styles.mainContainer}>
        <Typography variant="h5" component="h5" sx = { styles.paragraph}>
          Welcome to CORE's NLP App. Please select your project!
        </Typography>
        <Select
          label="Please select your Project"
          value={selectedProject}
          onChange={chooseProject}
          input={<OutlinedInput label="please select a projext" />}
        >
          <MenuItem value="project1">Project1</MenuItem>
          <MenuItem value="project2">Project2</MenuItem>
          <MenuItem value="project3">Project3</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
