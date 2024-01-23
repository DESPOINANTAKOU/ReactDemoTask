import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import HeaderComponent from "../Header";

export default function NlpDesign() {
  return (
    <Box>
      <HeaderComponent />
      <Box sx={styles.insideContainer}>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          placeholder="please insert your text"
        />
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
