"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Link from "next/link";
import pills from "./../images/pills.png";

const Hero3 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = React.useState(false);

  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const [open7, setOpen7] = React.useState(false);

  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  const [open8, setOpen8] = React.useState(false);

  const handleClickOpen8 = () => {
    setOpen8(true);
  };

  const handleClose8 = () => {
    setOpen8(false);
  };

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        // backgroundColor: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#15355e",
          fontWeight: "bold",
          mt: 5,
          ml: 5,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Management & Living
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "#15355e",
          fontWeight: "bold",
          marginLeft: 50,
        }}
      >
        with Diabetes
      </Typography>

      {/* First row for the managing and living with Diabetes */}
      <Container
        sx={{ paddingBottom: 4, mt: 3, display: "flex", flexDirection: "row" }}
      >
        {/* First card  */}
        <Card sx={{ width: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://www.cdc.gov/diabetes/images/library/features/Patient-Hands-with-Glucometer.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Monitoring blood sugar levels
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Self-Monitoring: Regular blood sugar testing with a glucose
                meter helps track how well treatment is working and identifies
                any need for adjustments.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen}>
              view more
            </Button>
          </CardActions>
        </Card>
        {/* Modal for the first card */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Monitoring blood sugar levels
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              1. Self-Monitoring: Regular blood sugar testing with a glucose
              meter helps track how well treatment is working and identifies any
              need for adjustments.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              2. Target Blood Sugar Levels: These targets vary, but common goals
              are: a. Fasting (before meals): 80–130 mg/dL or 3.9 mmol/l- 5.6
              mmol/l b. After meals (random): Less than 180 mg/dl
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Done</Button>
          </DialogActions>
        </Dialog>

        {/* This is the second child */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://media.istockphoto.com/id/1473675453/photo/well-balanced-diet-and-blood-pressure-control-for-heart-care.jpg?s=612x612&w=0&k=20&c=XUxCIyfmz0YaDzBYY486omFNG80QyHprkFcjw1bMVsg="
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Healthy eating (Medical Nutrition Therapy)
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Carbohydrate Counting: Since carbohydrates impact blood sugar
                the most, learning to count carbs helps manage intake.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen1}>
              view more
            </Button>
          </CardActions>
        </Card>
        {/* Modal for the second card */}
        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Healthy eating (Medical Nutrition Therapy)
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Carbohydrate Counting: Since carbohydrates impact blood sugar the
              most, learning to count carbs helps manage intake.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Balanced Diet: Focus on whole grains, lean proteins, healthy fats,
              vegetables, and fruits. Limit processed foods, sugars, and
              saturated fats.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Portion Control: Managing portion sizes helps prevent overeating
              and supports weight management.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Glycaemic Index (GI): opt for low-GI foods that have a slower,
              more gradual effect on blood sugar.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Done</Button>
          </DialogActions>
        </Dialog>

        {/* This is the Third card */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://cdn.prod.website-files.com/64eec5ed1ea74a7194cd16a3/650825ad3f9a6079855bf37c_Hero%20image_%20people%20with%20glucose%20monitor%20doing%20sports.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Physical Activity
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Regular Exercise: At least 150 minutes of moderate aerobic
                exercise per week (e.g., walking, cycling) is recommended, along
                with strength training.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen2}>
              view more
            </Button>
          </CardActions>
        </Card>
        {/* Modal for the third card */}
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Physical Activity</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Regular Exercise: At least 150 minutes of moderate aerobic
              exercise per week (e.g., walking, cycling) is recommended, along
              with strength training.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Impact on Blood Sugar: Physical activity lowers blood sugar levels
              and increases insulin sensitivity.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Adjustments for Activity: Monitoring blood sugar before, during,
              and after exercise can help prevent hypoglycaemia (low blood
              sugar).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>Done</Button>
          </DialogActions>
        </Dialog>

        {/* This is the Fourth card */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://images.squarespace-cdn.com/content/v1/56b5014d22482e764ea40f83/1566503477757-VS55SAEONSWQ8AE2N0K9/Medication+Management+Oxford+Healthcare+Tulsa+Oklahoma+home+healthcare+tulsa+health+care+services+tulsa.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Medication management
              </Typography>

              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Insulin Therapy: Required for Type 1 diabetes and sometimes for
                Type 2. Different types of insulin (rapid-acting, long-acting)
                are used depending on needs.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen3}>
              view more
            </Button>
          </CardActions>
        </Card>

        {/* Modal for the fourth card */}
        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Medication management
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Insulin Therapy: Required for Type 1 diabetes and sometimes for
              Type 2. Different types of insulin (rapid-acting, long-acting) are
              used depending on needs.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Oral Medications: For Type 2 diabetes, medications like metformin
              help control blood sugar.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Injectable Medications: Other injectables, like GLP-1 receptor
              agonists, may help with glucose control and weight loss.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Medication Adherence: Taking medications as prescribed is
              essential for managing diabetes effectively.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3}>Done</Button>
          </DialogActions>
        </Dialog>
      </Container>

      {/* Second row for the managing and living with Diabetes */}
      <Container
        sx={{ paddingBottom: 4, mt: 3, display: "flex", flexDirection: "row" }}
      >
        {/* First card  */}
        <Card sx={{ width: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://www.queens.org/wp-content/uploads/2020/06/Stress_Management.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Stress management
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Impact of Stress: Stress can raise blood sugar levels due to
                hormonal responses. Chronic stress may affect blood sugar
                control.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen4}>
              view more
            </Button>
          </CardActions>
        </Card>
        {/* Modal for the first card */}
        <Dialog
          open={open4}
          onClose={handleClose4}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Stress Management</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Impact of Stress: Stress can raise blood sugar levels due to
              hormonal responses. Chronic stress may affect blood sugar control.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Stress-Reduction Techniques: Yoga, meditation, deep breathing
              exercises, or engaging in hobbies can help reduce stress levels.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose4}>Done</Button>
          </DialogActions>
        </Dialog>

        {/* This is the second child */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://media.istockphoto.com/id/1473675453/photo/well-balanced-diet-and-blood-pressure-control-for-heart-care.jpg?s=612x612&w=0&k=20&c=XUxCIyfmz0YaDzBYY486omFNG80QyHprkFcjw1bMVsg="
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Managing complications
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Regular Medical Checkups: Annual eye exams, foot checks, kidney
                function tests, and cholesterol screenings help catch
                complications early.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen5}>
              view more
            </Button>
          </CardActions>
        </Card>
        {/* Modal for the second card */}
        <Dialog
          open={open5}
          onClose={handleClose5}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Managing Complications
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Regular Medical Checkups: Annual eye exams, foot checks, kidney
              function tests, and cholesterol screenings help catch
              complications early.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Diabetes-Related Conditions: Pay attention to signs of diabetic
              neuropathy (nerve damage), nephropathy (kidney disease), and
              retinopathy (eye disease).
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Foot Care: Proper foot care is crucial since diabetes increases
              the risk of infections and foot ulcers.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose5}>Done</Button>
          </DialogActions>
        </Dialog>

        {/* This is the Third card */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://www.diabetes-care.wales/wp-content/uploads/2022/09/12-Hypoglycaemia-Diagram-1024x481.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Managing hypoglycaemia and hyperglycaemia
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Hypo glycaemia (Low Blood Sugar): Symptoms include sweating,
                shakiness, confusion, and dizziness. It's treated with 15 grams
                of fast-acting carbs (juice, glucose tablets).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen6}>
              view more
            </Button>
          </CardActions>
        </Card>
        {/* Modal for the third card */}
        <Dialog
          open={open6}
          onClose={handleClose6}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Managing hypoglycaemia and hyperglycaemia
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Hypo glycaemia (Low Blood Sugar): Symptoms include sweating,
              shakiness, confusion, and dizziness. It's treated with 15 grams of
              fast-acting carbs (juice, glucose tablets).
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Hyper glycaemia (High Blood Sugar): Caused by not enough insulin
              or missed medications, symptoms include thirst, frequent
              urination, and fatigue. Adjustments in medication and lifestyle
              can help.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose6}>Done</Button>
          </DialogActions>
        </Dialog>

        {/* This is the Fourth card */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://media.istockphoto.com/id/1217025423/video/close-up-woman-checking-blood-sugar-with-diabetes-using-a-blood-glucose-meter-to-test-blood.jpg?s=640x640&k=20&c=faQISjWydRKD60CIs7WRA8QSuHRGzqcRQm-6kzIpqvE="
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Living well with diabetes
              </Typography>

              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Technology Aids: Apps for tracking food intake, physical
                activity, and blood sugar levels can simplify management.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen7}>
              view more
            </Button>
          </CardActions>
        </Card>

        {/* Modal for the fourth card */}
        <Dialog
          open={open7}
          onClose={handleClose7}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Living well with diabetes
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Technology Aids: Apps for tracking food intake, physical activity,
              and blood sugar levels can simplify management.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Support Systems: Engage with diabetes support groups, counsellors,
              or a diabetes educator. Having emotional and social support
              improves long-term management.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Education: Ongoing education about diabetes is important. It helps
              adapt to new information about diet, medications, and monitoring
              tools.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose7}>Done</Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: 4,
        }}
      >
        {/* This is the Fourth card */}
        <Card sx={{ width: 280, ml: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://www.osfhealthcare.org/blog/wp-content/uploads/2021/09/gestational-diabetes-blog.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Managing diabetes during special situations
              </Typography>

              <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                Pregnancy (Gestational Diabetes): Blood sugar management during
                pregnancy is crucial to prevent complications for both mother
                and baby
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen8}>
              view more
            </Button>
          </CardActions>
        </Card>

        {/* Modal for the fourth card */}
        <Dialog
          open={open8}
          onClose={handleClose8}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Managing diabetes during special situations
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Pregnancy (Gestational Diabetes): Blood sugar management during
              pregnancy is crucial to prevent complications for both mother and
              baby
            </DialogContentText>

            <br />
            <DialogContentText id="alert-dialog-description">
              Travel: Plan ahead by bringing enough medication, testing
              supplies, and snacks. Keep insulin cool if needed.
            </DialogContentText>
            <br />
            <DialogContentText id="alert-dialog-description">
              Sick Days: Illness can affect blood sugar levels. Monitoring blood
              sugar more frequently and adjusting insulin or medications may be
              necessary.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose8}>Done</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Hero3;
