// components/AboutUs.tsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";

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

const AboutUs = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "pink", // Light gray background
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Here is our team
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardContent>
                <Avatar sx={{ bgcolor: "blue" }} alt={member.name}>
                  {member.name.charAt(0)} {/* Using initials for the avatar */}
                </Avatar>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {member.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
