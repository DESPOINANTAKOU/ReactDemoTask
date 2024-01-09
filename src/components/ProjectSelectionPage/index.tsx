import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";
import SelectComponent from "../SelectComponent";
import HeaderComponent from "../HeaderComponent";
import Footer from "../FooterComponent "

export default function WelcomePage() {
  const [selectedProject, setSelectedProject] = useState("");

  const chooseProject = (event: SelectChangeEvent) => {
    setSelectedProject(event.target.value);
  };

  return (
    <Box sx={styles.parentContainer}>
      <HeaderComponent />
      <Box sx={styles.mainContainer}>
        <Typography variant="h5" component="h5" sx={styles.paragraph}>
          Welcome to CORE's NLP App. Please select your project!
        </Typography>
        <SelectComponent />{" "}
      </Box>
     <Footer />
    </Box>
  );
}
