import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Subbar = () => {

  const companyName = "Sofia Lindström";


  return (
    <Box
      sx={{
        backgroundColor: grey[100],
        boxSizing: "border-box",
        height: "350px",
        px: "70px",
        py: "70px",
      }}
    >
      <Typography variant="h3" sx={{ mb: "1rem" }}>
        {companyName}
      </Typography>
      <Box sx={{ mb: "1rem" }}>
        <Typography>123 Gatan</Typography>
        <Typography>Stockholm, Sweden</Typography>
      </Box>
      <Box>
        <Typography>+46 70 123 45 67</Typography>
        <Typography>sofialindstrom@gmail.com</Typography>
      </Box>
    </Box>
  );
};

export default Subbar;
