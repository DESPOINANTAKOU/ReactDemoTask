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
import SelectComponent from "../SelectComponent";
import HeaderComponent from "../HeaderComponent";

export default function WelcomePage() {
  const [selectedProject, setSelectedProject] = useState("");

  const chooseProject = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <Box sx={styles.parentContainer}>
      <HeaderComponent />
      <Box sx={styles.mainContainer}>
        <Typography variant="h5" component="h5" sx={styles.paragraph}>
          Welcome to CORE's NLP App. Please select your project!
        </Typography>
        <SelectComponent />
      </Box>
    </Box>
  );
}
