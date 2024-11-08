import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import React from "react";

const Hero5 = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        marginTop: 4,
        backgroundColor: "#f3f9fd",
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
        COMPLICATIONS OF DIABETES
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#666",
          fontWeight: "bold",
          mt: 2,
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Understanding the Risks and Consequences
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          mt: 2,
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
          px: 5,
        }}
      >
        Diabetes can lead to a variety of complications, particularly if it is
        not well-managed over time. These complications are often related to
        damage caused by prolonged high blood sugar levels and can affect
        various organs and systems in the body. They are generally classified
        into microvascular (small blood vessels) and macrovascular (large blood
        vessels) complications. Here are some common ones:
      </Typography>
      <Grid container spacing={2} sx={{ mt: 4, px: 5 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/06/GettyImages-122137984_header-1024x575.jpg?w=1155&h=1528"
              sx={{
                height: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#15355e", fontWeight: "bold", mb: 1 }}
              >
                Microvascular Complications
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Diabetic Retinopathy: Damage to the blood vessels of the retina,
                leading to vision problems or blindness.
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Diabetic Nephropathy: Kidney damage that can progress to chronic
                kidney disease or kidney failure.
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Diabetic Neuropathy: Nerve damage, especially in the hands and
                feet, causing pain, tingling, and loss of sensation. It can also
                affect other organs, such as the digestive system and heart.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              miHeight: 350,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://ars.els-cdn.com/content/image/3-s2.0-B9780123813664000146-f14-11-9780123813664.jpg"
              sx={{
                height: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "#15355e", fontWeight: "bold", mb: 1 }}
              >
                Macrovascular Complications
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Cardiovascular Disease: Increased risk of heart attacks,
                strokes, and narrowing of the arteries (atherosclerosis).
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Peripheral Artery Disease (PAD): Poor circulation to the limbs,
                which can lead to pain, ulcers, and in severe cases, amputation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 350,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://cdn.prod.website-files.com/62587e89f4dd492da80e4fef/625e24a419656d37c203fd63_x-iStock-1135588159.jpg"
              sx={{
                height: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "#15355e", fontWeight: "bold", mb: 1 }}
              >
                Foot Complications
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Due to poor circulation and nerve damage, individuals with
                diabetes are at risk of developing foot ulcers, infections, and
                in some cases, amputations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://www.shutterstock.com/image-illustration/diabetes-diabetic-blood-glucose-symbol-600nw-2336338523.jpg"
              sx={{
                height: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#15355e", fontWeight: "bold", mb: 1 }}
              >
                Diabetic Ketoacidosis (DKA)
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                A serious condition where the body breaks down fat too quickly,
                producing ketones that make the blood acidic. It is more common
                in type 1 diabetes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://www.pinnacleskin.com/getmedia/0b1c8f6b-691a-47b8-916d-c6954ec5b1b2/Unmasking-Chronic-Skin-Conditions.jpg?width=704&height=400&ext=.jpg"
              sx={{
                height: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#15355e", fontWeight: "bold", mb: 1 }}
              >
                Skin Infections and Conditions
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                People with diabetes are more prone to bacterial and fungal
                infections, as well as other skin conditions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minHeight: 350,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://i.redd.it/u3u99g7vlj181.jpg"
              sx={{
                height: 150,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#15355e", fontWeight: "bold", mb: 1 }}
              >
                Alzheimer’s Disease
              </Typography>
              <Typography sx={{ color: "#666", mb: 2, fontSize: 12 }}>
                Some studies suggest a link between type 2 diabetes and an
                increased risk of Alzheimer's or other types of dementia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero5;
