import { Box, Button, Grid, Paper, Typography } from "@mui/material";
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
    <Box
      sx={{
        width: 1,
        maxWidth: 1536,

        minWidth: 750,
      }}
    >
      <Paper
        square
        style={styles.paperContainer}
        sx={{
          display: "block",
          mt: "5vh",
          width: 1,
          height: "20vh",
        }}
      >
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={{ md: 2, xs: 1 }}
          // columns={{ sm: 8, md: 12 }}
          sx={{ pl: "15vw", height: { xs: "100%" }, width: 1 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                  }}
                  variant="h5"
                  component="h6"
                  align="right"
                >
                  +8
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                  }}
                  variant="h5"
                  component="h6"
                  align="right"
                >
                  سنوات خبرة
                </Typography>
              </Box>
              <Box
                component="img"
                src="svgex.svg"
                sx={{ height: 60, width: 60 }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                  }}
                  variant="h5"
                  component="h6"
                  align="right"
                >
                  +80
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                  }}
                  variant="h5"
                  component="h6"
                  align="right"
                >
                  زبون من دول مختلفه
                </Typography>
              </Box>
              <Box
                component="img"
                src="person.svg"
                sx={{ height: 60, width: 60 }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                  }}
                  variant="h5"
                  component="h6"
                  align="right"
                >
                  +100
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                  }}
                  variant="h5"
                  component="h6"
                  align="right"
                >
                  مشروع
                </Typography>
              </Box>
              <Box
                component="img"
                src="svgcode.svg"
                sx={{ height: 60, width: 60 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
