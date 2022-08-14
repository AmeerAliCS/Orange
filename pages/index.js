import { Grid } from "@mui/material";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  return (
    <Grid container>
      <Hero />
      <Testimonial />
    </Grid>
  );
}
