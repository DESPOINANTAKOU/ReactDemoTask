import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

export default function HeaderComponent() {
  const hrStyles = {
    width: "100%",
    marginLeft: "0px",
    padding: 0,
    margin: 0,
    borderColor: "black",
    borderRadius: "black",
  };

  return (
    <>
      <Box sx={styles.headerContainer}>
        <img
          src="/assets/images/coregroup.jpg"
          alt="core's logo"
          width="80px"
        />
        <Typography variant="h3" component="h3" sx={styles.typography}>
          CORE'S NLP APP
        </Typography>
      </Box>
      <hr style={hrStyles} />
    </>
  );
}
