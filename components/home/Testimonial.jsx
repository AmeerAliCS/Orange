import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"Testimonial.svg"})`,
  },
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Testimonial() {
  return (
    <Paper
      square
      style={styles.paperContainer}
      sx={{
        display: "block",
        mt: "5vh",
        width: 1,
        height: { md: "20vh", xs: "15vh" },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{ pt: 7 }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography
              sx={{
                color: "white",
                pr: 1,
                fontSize: { md: 25, xs: 15 },
              }}
              align="right"
            >
              +8
            </Typography>
            <Typography
              sx={{
                color: "white",
                pr: 1,
                fontSize: { md: 25, xs: 15 },
              }}
              align="right"
            >
              سنوات خبرة
            </Typography>
          </Box>
          <Box
            component="img"
            src="svgex.svg"
            sx={{ height: { md: 60, xs: 35 }, width: { md: 60, xs: 35 } }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography
              sx={{
                color: "white",
                pr: 1,
                fontSize: { md: 25, xs: 15 },
              }}
              align="right"
            >
              +80
            </Typography>
            <Typography
              sx={{
                color: "white",
                pr: 1,
                fontSize: { md: 25, xs: 15 },
              }}
              align="right"
            >
              زبون من دول مختلفه
            </Typography>
          </Box>
          <Box
            component="img"
            src="person.svg"
            sx={{ height: { md: 60, xs: 35 }, width: { md: 60, xs: 35 } }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography
              sx={{
                color: "white",
                pr: 1,
                fontSize: { md: 25, xs: 15 },
              }}
              align="right"
            >
              +150
            </Typography>
            <Typography
              sx={{
                color: "white",
                pr: 1,
                fontSize: { md: 25, xs: 15 },
              }}
              align="right"
            >
              مشروع
            </Typography>
          </Box>
          <Box
            component="img"
            src="svgcode.svg"
            sx={{ height: { md: 60, xs: 35 }, width: { md: 60, xs: 35 } }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
