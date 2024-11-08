// components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import pills from "./../images/pills.png";
import Meds from "./../images/meds.png";

const Hero2 = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "row",
        marginTop: 4,
        backgroundColor: "white",
        borderRadius: 5,
      }}
    >
      {/* this section contains the left section of the row */}
      <Box
        width={"50%"}
        display={"flex"}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#15355e", fontWeight: "bold", textAlign: "center" }}
        >
          Diabetes Education
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#435d7e",
            fontSize: 12,
            marginTop: 2,
            textAlign: "center",
            padding: 4,
          }}
        >
          Diabetes is a chronic illness characterized by elevated levels of
          blood glucose, accompanied by disturbed metabolism of fats and
          proteins. Blood glucose rises because it cannot be metabolised in the
          cells to effectively, due to lack of insulin produced by the pancreas
          or inability of the cells to effectively use insulin that is being
          produced.
        </Typography>
        <a
          href="https://thediabeteslink.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="medium"
            sx={{
              borderRadius: 5,
              backgroundColor: "#15355e",
              marginTop: 5,
              marginLeft: 30,
              width: 100,
            }}
          >
            <Typography
              sx={{
                color: "#ffff",
                fontWeight: "bold",
                fontSize: 10,
              }}
            >
              Read Docs
            </Typography>
          </Button>
        </a>
      </Box>

      {/* this section contains the left section of the row */}
      <Box
        width={"50%"}
        display="flex"
        sx={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ecf5f3",
          marginTop: 4,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        {/* this is the image component */}
        <img
          src={Meds.src}
          alt="Description of image"
          width={450}
          height={200}
        />

        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "30px",
            paddingRight: 20,
            paddingBottom: 20,
          }}
        >
          <li style={{ color: "#15355e" }}>
            <Typography
              sx={{ fontSize: 12, textAlign: "initial", fontWeight: "bold" }}
            >
              Type 1: often occurring in children, adolescents, and young
              adults, is characterized by the pancreas's inability to produce
              insulin. Though its exact causes are unknown, genetic
              susceptibility and environmental factors are believed to play a
              role.
            </Typography>
          </li>
          <li style={{ color: "#15355e" }}>
            <Typography
              sx={{
                fontSize: 12,
                textAlign: "initial",
                mt: 2,
                fontWeight: "bold",
              }}
            >
              Type 2: occurs when body cells become resistant to insulin, and
              insulin production gradually decreases over time. Risk factors
              include family history, age, obesity, and physical inactivity.
              High sugar and fat intake have also been linked to an increased
              risk.
            </Typography>
          </li>
          <li style={{ color: "#15355e" }}>
            <Typography
              sx={{
                fontSize: 12,
                textAlign: "initial",
                mt: 2,
                fontWeight: "bold",
              }}
            >
              Gestational diabetes: occurs during pregnancy and can lead to
              complications at birth, increasing the mother’s risk of type 2
              diabetes and the child’s risk of obesity. Its risk factors include
              those for type 2 diabetes—family history, age, obesity, and
              physical inactivity—plus excessive weight gain during pregnancy
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Hero2;
