import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { styles } from "./styles";
import SelectComponent from "../SelectComponent";
import Header from "../Header";
import Footer from "../FooterComponent ";
import SideBar from "../SideBar";

export default function WelcomePage() {
  const [selectedProject, setSelectedProject] = useState("");

  const chooseProject = (event: SelectChangeEvent) => {
    setSelectedProject(event.target.value);
  };

  return (
    <Box sx={styles.parentContainer}>
      <Header />
      <Box sx={styles.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={10}>
            <Box sx={styles.mainBodyGrid}>
              <Typography variant="h5" component="h5" sx={styles.paragraph}>
                Welcome to CORE's NLP App. Please select your project!
              </Typography>
              <SelectComponent  sx = {{marginTop: "-7rem"}}/>{" "}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
