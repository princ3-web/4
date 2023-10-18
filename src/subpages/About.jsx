import { Box, Typography, CardMedia, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import image1 from "../assets/images/6.jpg";

const About = () => {
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
          About
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography sx={{ mb: "1rem" }}>
            We think of wedding photography not as a single practice, but as several interlocking
            ones. Moments are inseparable from emotions, lighting is inseparable from capturing the
            essence of the event, and enhancing the couple's bond is the ultimate goal of our work.
            Trends in photography may come and go, but we have found these principles to be
            timeless.
          </Typography>
          <Typography sx={{ mb: "1rem" }}>
            As a wedding photographer, Sofia Lindström and I strive for honesty and clarity. Our
            primary focus is to comprehend the couple's vision and desires, not to impose our own
            style. We value timeliness, open communication, and providing glimpses of the captured
            moments over elaborate presentations. Moreover, we appreciate the personal touch of
            face-to-face meetings, perhaps over a cup of coffee or a meal.
          </Typography>
          <Typography sx={{ mb: "1rem" }}>
            Over the years, we have been fortunate to collaborate with amazing couples on their
            special day, but we believe it is still too early to judge the success of our work.
            Wedding photographs exist in time and their value is directly related to how well they
            continue to evoke cherished memories.
          </Typography>
          <Typography sx={{ mb: "1rem" }}>
            We are proud of our artistic style and background, but do not consider ourselves
            proponents of a particular photography school. Photography has no fixed style, as each
            wedding is unique and demands a tailored approach that complements the couple's story
            and preferences.
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
              '&:hover': {
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
          sx={{ position: "absolute", height: "400px", objectPosition: "50% 0%" }}
        />
      </Box>
    </Box>
  );
};

export default About;
