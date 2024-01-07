import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles"

export default function NlpDesign() {
  return (
    <Box sx={styles.container}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", color: "#1976d2", marginTop: "2rem" }}
      >
        CORE'S NLP APP
      </Typography>
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
