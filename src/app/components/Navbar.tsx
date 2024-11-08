import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
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
              component={Link}
              href="/"
              sx={{ textTransform: "none", color: "#fff" }}
            >
              Managing&Living
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{ textTransform: "none", color: "#fff" }}
            >
              Adherence Tips
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{ textTransform: "none", color: "#fff" }}
            >
              Complications
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{ textTransform: "none", color: "#fff" }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{ textTransform: "none", color: "#fff" }}
            >
              Resources
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
