import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/person1.jpg";
import image2 from "../assets/images/person2.jpg";

const OurTeam = () => {
  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: "space-evenly", my: "5rem" }}>
      <Box sx={{ width: "30%" }}>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image1}
          sx={{ height: "750px", width: "500px", objectPosition: "50% 80%" }}
        />
        <Typography variant="h3" sx={{ my: "2rem" }}>
          Sofia Lindström
        </Typography>
        <Typography>
          Sofia Lindström, a passionate wedding photographer, masterfully captures timeless moments
          of love and joy. With an eye for emotion and a talent for storytelling through her lens,
          she crafts visual narratives that resonate deeply. Sofia's artistry and dedication elevate
          weddings into cherished, everlasting memories for couples to treasure.
        </Typography>
      </Box>
      <Box sx={{ width: "30%" }}>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image2}
          sx={{ height: "750px", width: "500px", objectPosition: "50% 80%" }}
        />
        <Typography variant="h3" sx={{ my: "2rem" }}>
          Erik Nordlund
        </Typography>
        <Typography>
          Erik Nordlund, a gifted wedding photographer, weaves romantic tales through his camera
          lens. With an artistic vision and keen attention to detail, he captures love in its purest
          form. Erik's photographs reflect the essence of each couple, transforming their special
          day into a timeless visual love story.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurTeam;
