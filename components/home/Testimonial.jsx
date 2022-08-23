import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { testimonialData } from "../../public/orangeData/orangeData";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"Testimonial.svg"})`,
  },
};

export default function Testimonial() {
  return (
    <Paper
      square
      style={styles.paperContainer}
      sx={{
        display: "block",
        mt: "5vh",
        width: 1,
        height: { md: "20vh", xs: "20%" },
      }}
    >
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        justifySelf="center"
        sx={{ pt: { xs: 1, md: 4 } }}
        spacing={6}
      >
        {testimonialData.map((data) => (
          <Stack
            key={data.id}
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Box component="div">
              <Typography
                sx={{
                  color: "white",
                  pr: 1,
                  fontSize: { md: 25, xs: 15 },
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                {data.num}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  pr: 1,
                  fontSize: { md: 25, xs: 15 },
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                {data.title}
              </Typography>
            </Box>
            <Box
              component="img"
              src={data.imageUrl}
              sx={{
                display: "flex",
                height: { md: 60, xs: 45 },
                width: { md: 60, xs: 45 },
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}
