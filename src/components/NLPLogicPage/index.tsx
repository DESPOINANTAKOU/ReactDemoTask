import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles"
import HeaderComponent from "../HeaderComponent"

export default function NlpDesign() {
  return (
    <Box >
     <HeaderComponent  /> 
      <Box sx={styles.insideContainer}>
        <TextField placeholder="please insert your text"></TextField>
        <Button variant="outlined" sx={{ padding: "14px 14px" }}>
          Insert your pdf please!
        </Button>
      </Box>
      <Button variant="contained" sx={styles.button}>
        submit for processing!
      </Button>
    </Box>
  );
}
