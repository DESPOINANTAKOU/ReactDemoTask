import { Box, Typography, createFilterOptions } from "@mui/material";
import { styles } from "./styles";
import React from "react";

export default function HeaderComponent() {
  return (
    <Box sx={styles.typographyContainer}>
      <Typography variant="h3" component="h3" sx={styles.typography}>
        CORE'S NLP APP
      </Typography>
    </Box>
  );
}
