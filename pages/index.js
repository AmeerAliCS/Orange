import { Grid } from "@mui/material";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  return (
    <Grid container>
      <Grid item>
        <Hero />
      </Grid>
      <Grid item xs={20}>
        <Testimonial />
      </Grid>
    </Grid>
  );
}
