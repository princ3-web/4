import React from "react";
import { Box, CardMedia, Button } from "@mui/material";
import { Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import { grey } from "@mui/material/colors";

const Home = () => {
  const companyName = "Sofia Lindström";

  const projects = [
    { title: "session one", image: image1 },
    { title: "session two", image: image2 },
    { title: "session three", image: image3 },
    { title: "session four", image: image4 },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          height: "300px",
          px: "70px",
        }}
      >
        <Typography sx={{ fontSize: "64px" }}>Timeless love captured through the lens.</Typography>
      </Box>
      <Box sx={{ width: "100vw", overflow: "hidden" }}>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image5}
          sx={{ height: "600px", objectPosition: "50% 80%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          height: "300px",
          px: "70px",
          my: "3.5rem",
        }}
      >
        <Typography variant="h3" sx={{ mb: "2rem" }}>
          Recent Work
        </Typography>
        <Typography sx={{ width: "50%" }}>
          Our approach encompasses capturing intimate moments at weddings, from candid glances to
          orchestrated celebrations. While our style is creatively diverse, our photographs are
          united by a dedication to encapsulating the beauty of love and human connections.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {projects.map((item) => (
          <Box sx={{ width: "45%", mb: "2rem" }}>
            <CardMedia
              component="img"
              alt="Sample Image"
              image={item.image}
              sx={{ height: "500px" }}
            />
            <Typography variant="h4" sx={{ my: "2rem" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: grey[900],
          boxSizing: "border-box",
          height: "400px",
          px: "70px",
          py: "70px",
        }}
      >
        <Typography variant="h3" sx={{ color: grey[100], my: "1.5rem" }}>
          Let’s Work Together
        </Typography>
        <Typography sx={{ color: grey[100], width: "700px" }}>
          We're constantly seeking new wedding projects and are open to traveling for your special
          day. Feel free to reach out, and our dedicated team will connect with you to initiate the
          wedding photography planning.
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
    </Box>
  );
};

export default Home;
