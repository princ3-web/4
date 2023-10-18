import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/7.jpg";

const Clients = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
          paddingX: "70px",
          paddingY: "120px",
        }}
      >
        <Typography variant="h3" sx={{ width: "50%" }}>
          Our clients
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography sx={{ mb: "3rem", fontStyle:"italic" }}  variant="h6">
            "We hired a wedding photographer for our special day, and the experience was phenomenal!
            The photographer captured every beautiful moment with precision and creativity. The
            photos were stunning and truly reflected the joy and love of the day. We couldn't be
            happier with the results and highly recommend their services to anyone in need of a
            wedding photographer."
          </Typography>
          <Typography sx={{ mb: "3rem", fontStyle:"italic" }}  variant="h6">
            "Our wedding photographer was excellent in capturing the essence of our wedding. The
            photos turned out amazing, and we appreciated the photographer's professionalism and
            attention to detail. The only reason I'm giving 4 stars instead of 5 is that we wish
            there were a few more candid shots, but overall, we're very satisfied with the memories
            they've created for us."
          </Typography>
          <Typography sx={{ mb: "3rem", fontStyle:"italic" }}  variant="h6">
            "Our wedding photographer was absolutely fantastic! From the initial consultation to the
            final product, everything was top-notch. They had a wonderful eye for capturing unique
            moments and emotions. The album they created for us is like a beautiful story that we'll
            cherish forever. The photographer was easy to work with and made us feel comfortable
            throughout the day. Highly recommended for any couple looking for a talented wedding
            photographer."
          </Typography>
          <Typography sx={{ mb: "3rem", fontStyle:"italic" }} variant="h6">
            "We hired a wedding photographer and were quite pleased with the results. The photos
            were beautiful, and they managed to capture all the important moments. The only reason
            for not giving a perfect score is that we had a few minor delays in receiving the final
            edited pictures. Nonetheless, the wait was worth it, and we're thrilled with the
            memories they've provided us."
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", height: "400px" }}>
        <Box
          sx={{ position: "absolute", zIndex: 1, boxSizing: "border-box", px: "70px", py: "70px" }}
        >
          <Typography variant="h3" sx={{ color: grey[100], my: "1.5rem" }}>
            Let’s Work Together
          </Typography>
          <Typography sx={{ color: grey[100], width: "700px" }}>
            We're constantly seeking new wedding projects and are open to traveling for your special
            day. Feel free to reach out, and our dedicated team will connect with you to initiate
            the wedding photography planning.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: grey[100],
              color: grey[900],
              border: "none",
              px: "65px",
              py: "15px",
              my: "35px",
              borderRadius: "0px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: grey[400],
                border: "none",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image1}
          sx={{
            position: "absolute",
            height: "400px",
            objectPosition: "50% 50%",
            filter: "saturate(0) brightness(0.8)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Clients;
