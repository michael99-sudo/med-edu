// pages/medication-info.tsx
"use client";
import React, { useRef } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Card,
  CardContent,
  CardActions,
  Button,
  AvatarGroup,
  Avatar,
  Toolbar,
  AppBar,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import introcover from "./images/introcover.jpg";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import AboutUs from "./components/AboutUs";
import Link from "next/link";
import ReactDOM from "react-dom/client";
import { keyframes } from "@emotion/react";

import { styled } from "@mui/material/styles";
// Define the fade-in animation using Emotion's keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const data = [
  {
    name: "Maatla Sharline Segobaetso",
    id: "202301512",
  },
  {
    name: "Kelebetse D. Joseph",
    id: "202209162",
  },
  {
    name: "Dineo Cornellious-Kaizer",
    id: "9701469",
  },
  {
    name: "Maduo Girlie Seitei",
    id: "202002571",
  },
  {
    name: "Ponalo Angellah Gaofengwe",
    id: "202301002",
  },
  {
    name: "Tshenolo Kukara",
    id: "202300744",
  },
  {
    name: "Lindy Lebalang",
    id: "202200872",
  },
  {
    name: "Tebogo Perekisi",
    id: "202305745",
  },
];

// Function to open AboutUs in a new tab
const openAboutUs = () => {
  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.document.write('<div id="about-us-root"></div>'); // Create a root div for React to render
    newWindow.document.close(); // Close the document to finish loading

    const aboutUsRoot = newWindow.document.getElementById("about-us-root");
    if (aboutUsRoot) {
      const root = ReactDOM.createRoot(aboutUsRoot as HTMLElement); // Use type assertion
      root.render(<AboutUs />); // Render AboutUs component
    } else {
      console.error("Failed to find the root element in the new window.");
    }
  }
};
export default function MedicationInfo() {
  // Create a ref for Hero3
  const hero3Ref = useRef<HTMLDivElement>(null);
  // Create a ref for Hero4
  const hero4Ref = useRef<HTMLDivElement>(null);
  // Create a ref for Hero5
  const hero5Ref = useRef<HTMLDivElement>(null);
  // Create a ref for Hero6
  const hero6Ref = useRef<HTMLDivElement>(null);

  // Function to scroll to Hero3
  const scrollToHero3 = () => {
    if (hero3Ref.current) {
      hero3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to Hero4
  const scrollToHero4 = () => {
    if (hero4Ref.current) {
      hero4Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to Hero4
  const scrollToHero5 = () => {
    if (hero5Ref.current) {
      hero5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to Hero4
  const scrollToHero6 = () => {
    if (hero6Ref.current) {
      hero6Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />;
  return (
    <Grid sx={{ backgroundColor: "#f5f5f5" }}>
      {/* this container is for the navigation bar at the top */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* <Navbar /> */}
        <AppBar
          position="static"
          color="default"
          sx={{ backgroundColor: "#333", padding: 1 }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#fff" }}
              >
                Med Edu
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  color="inherit"
                  component={Link}
                  href="/"
                  sx={{ textTransform: "none", color: "#fff" }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={scrollToHero3} // Use the scroll function
                  sx={{ textTransform: "none", color: "#fff" }}
                >
                  Managing&Living
                </Button>
                <Button
                  color="inherit"
                  onClick={scrollToHero4} // Use the scroll function
                  sx={{ textTransform: "none", color: "#fff" }}
                >
                  Adherence Tips
                </Button>
                <Button
                  color="inherit"
                  onClick={scrollToHero5} // Use the scroll function
                  sx={{ textTransform: "none", color: "#fff" }}
                >
                  Complications
                </Button>
                <Button
                  color="inherit"
                  onClick={scrollToHero6} // Call the function to open AboutUs in a new tab
                  sx={{ textTransform: "none", color: "#fff" }}
                >
                  About Us
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {/* This is the first Hero section */}
      <Box
        sx={{
          width: "100%",
          height: 400,
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "space-between", // Space out the content
          position: "relative", // For overlay
          backgroundImage: `url('https://www.shutterstock.com/image-photo/medication-tablet-female-pharmacist-pharmacy-600nw-2256995579.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          }}
        />
        <Box
          display="flex"
          sx={{
            flexDirection: "row",
            zIndex: 1, // Ensure content is above overlay
            marginTop: 6,
            padding: 2,
          }}
        >
          <Container>
            <Typography
              variant="h3"
              sx={{
                color: "#f5f5f5",
                fontWeight: "bold",
                textAlign: "left",
                mb: 2,
              }}
            >
              Understanding your medication
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e0e0e0",
                fontSize: 14,
                marginTop: 5,
                textAlign: "left",
              }}
            >
              Helping you make sense of your medications to improve health and
              well-being. We provide clear, reliable information on how your
              treatments work and why they matter. Take control of your
              healthcare journey with confidence and peace of mind.
            </Typography>
          </Container>

          <Container sx={{ marginLeft: 35, marginTop: 12 }}>
            <Card sx={{ width: 275, boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Box
                  display={"flex"}
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Typography sx={{ color: "#435d7e", fontSize: 12 }}>
                    Unlock the secret to a longer, healthier life! When you know
                    your condition, master your meds, and stick to your game
                    plan, you're not just surviving—you're thriving! Join our
                    vibrant community and take the reins of your health today!
                  </Typography>
                  <TrendingUpSharpIcon sx={{ color: "#435d7e" }} />
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>
      {/* This is the second HERO Section */}
      <Grid padding={5}>
        <Hero2 />
      </Grid>

      {/* This is the third HERO Section */}
      <Grid ref={hero3Ref}>
        <Hero3 />
      </Grid>

      {/* This is the fourth HERO Section */}
      <Grid ref={hero4Ref}>
        <Hero4 />
      </Grid>

      {/* This is the fifth HERO Section */}
      <Grid ref={hero5Ref}>
        <Hero5 />
      </Grid>

      {/* this it the container tht holds the team members */}
      <Grid ref={hero6Ref}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: "20vh", // Adjust height for footer
            background: "#15355e", // Dark background for footer
            color: "#fff",
            padding: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Meet Our Team
          </Typography>

          <Typography
            variant="h6"
            sx={{
              marginBottom: 2,
            }}
          >
            We are dedicated Cytotechnology students from the University of
            Botswana, passionate about raising awareness and educating our
            community on diabetes, including its management, complications, and
            the importance of adherence to treatment.
          </Typography>

          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Join us as we share valuable insights and knowledge to empower
            individuals to take control of their health.
          </Typography>

          <Box sx={{ marginTop: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Team Members:
            </Typography>
            <Box sx={{ marginTop: 1 }}>
              {data.map((member) => (
                <Typography key={member.id} variant="body2">
                  {member.name} (ID: {member.id})
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ marginTop: 3 }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} University of Botswana
              Cytotechnology Team
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
