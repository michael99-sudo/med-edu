// components/Navbar.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
} from "@mui/material";
import Link from "next/link";
import pills from "./../images/pills.png";
import { title } from "process";

const data = [
  {
    title: "Utilize Pill Organizers",
    description:
      "As a diabetic patient, you can also use a pill organizer to sort medications by day and time, making it easier for you to keep track of what to take and when.",
  },
  {
    title: "Engage Family and Friends",
    description:
      "Involve your friends and family in your medication schedule because it can help you in a positive way. For example, they can provide a support system, words of encouragement, and reminders regarding adherence to your medication.",
  },
  {
    title: "Set Achievable Goals",
    description:
      "As a diabetic patient, consider setting realistic health goals like designing a suitable training program that can improve your fitness level. This can help improve your mental health and reduce forgetfulness regarding your medication adherence.",
  },
  {
    title: "Regular Follow-ups",
    description:
      "Also make sure you  have regular check-ins with your healthcare providers to discuss your medication  regimen and any concerns you may have regarding your medication",
  },
  {
    title: "Discuss Concerns with Your Doctor",
    description:
      "If you’re experiencing side effects, find it difficult to afford medications, or have questions about your treatment plan, talk to your healthcare provider. They can offer solutions.",
  },
  {
    title: "Manage Side Effects",
    description:
      "If you experience side effects, discuss them with your healthcare provider. They may be able to adjust your dosage or suggest ways to manage the side effects.",
  },
  {
    title: "Limit Distractions",
    description:
      "Create a calm environment when taking your medication. Reducing distractions can help you focus on your health and remember your routine.",
  },
];

const Hero2 = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        marginTop: 4,
        backgroundColor: "white",
        borderRadius: 5,
        paddingBottom: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#15355e",
          fontWeight: "bold",
          mt: 5,
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        How You Can Adhere To Medication
      </Typography>

      {/* this container contains the first row of card / stickers */}
      <Container sx={{ mt: 4, display: "flex", flexDirection: "row" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: 180,
                backgroundColor: "pink",
                borderRadius: 5,
              }}
            >
              <Container sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    color: "#15355e",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Understand Your Condition
                </Typography>
                <Typography
                  sx={{
                    color: "#435d7e",
                    fontSize: 12,
                    fontFamily: "Roboto, sans-serif",
                    mt: 2,
                  }}
                >
                  As a diabetic patient it is essential to learn about diabetes,
                  including how their medications work and the role they play in
                  the management of the condition for example slightly
                  complicated procedures such as; For Type 2 diabetes injectable
                  medications, it’s imperative to learn and know how to
                  self-administer them
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: 180,
                backgroundColor: "pink",
                borderRadius: 5,
              }}
            >
              <Container sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    color: "#15355e",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Create a Medication Schedule
                </Typography>
                <Typography
                  sx={{
                    color: "#435d7e",
                    fontSize: 12,
                    fontFamily: "Roboto, sans-serif",
                    mt: 2,
                  }}
                >
                  Planning how and when to take medication can help you in
                  adhering to medication, this could involve linking your
                  medication times with daily activities, such as meals or
                  brushing your teeth.
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: 180,
                backgroundColor: "pink",
                borderRadius: 5,
              }}
            >
              <Container sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    color: "#15355e",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Use Reminders
                </Typography>
                <Typography
                  sx={{
                    color: "#435d7e",
                    fontSize: 12,
                    fontFamily: "Roboto, sans-serif",
                    mt: 2,
                  }}
                >
                  Make sure that as a diabetic patient you set up ways that can
                  be a reminder to you regarding your medication for example
                  setting alarms or using apps designed for medication
                  management. You can also keep medications in visible places as
                  a reminder. Besides that you can also keep a diary to log when
                  you take your medications, which can help you with adherence.
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* this container contains the second row of card / stickers */}
      <Container
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: 180,
                backgroundColor: "pink",
                borderRadius: 5,
              }}
            >
              <Container sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    color: "#15355e",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Utilize Pill Organizers
                </Typography>
                <Typography
                  sx={{
                    color: "#435d7e",
                    fontSize: 12,
                    fontFamily: "Roboto, sans-serif",
                    mt: 2,
                  }}
                >
                  As a diabetic patients you can also use a pill organizer to
                  sort medications by day and time, making it easier for you to
                  keep track of what to take and when.
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: 180,
                backgroundColor: "pink",
                borderRadius: 5,
              }}
            >
              <Container sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    color: "#15355e",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Engage Family and Friends
                </Typography>
                <Typography
                  sx={{
                    color: "#435d7e",
                    fontSize: 12,
                    fontFamily: "Roboto, sans-serif",
                    mt: 2,
                  }}
                >
                  Involve your friends and family on your medication schedule
                  because it can help you in a positive way, for example they
                  can have a support system, word of encouragement and they can
                  also be a reminder to you concerning adherence to your
                  medication.
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: 180,
                backgroundColor: "pink",
                borderRadius: 5,
              }}
            >
              <Container sx={{ padding: 2 }}>
                <Typography
                  sx={{
                    color: "#15355e",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Set Achievable Goals
                </Typography>
                <Typography
                  sx={{
                    color: "#435d7e",
                    fontSize: 12,
                    fontFamily: "Roboto, sans-serif",
                    mt: 2,
                  }}
                >
                  As a diabetic patient also consider setting realistic health
                  goals like designing a suitable training program that can be
                  useful in a way that can improve your fitness level as this
                  can help you improve your mental health and reduce the level
                  of forgetfulness regarding your medication adherence
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: 5,
          paddingBottom: 4,
        }}
      >
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: 180,
                    backgroundColor: "#ecf5f3",
                    borderRadius: 5,
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <Container sx={{ padding: 2 }}>
                    <Typography
                      sx={{
                        color: "#15355e",
                        fontWeight: "bold",
                        fontSize: 18,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#435d7e",
                        fontSize: 14,
                        fontFamily: "Roboto, sans-serif",
                        mt: 2,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Container>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero2;
