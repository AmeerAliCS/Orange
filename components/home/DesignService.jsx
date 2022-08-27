import { Grid, Typography, Stack, Box } from "@mui/material";
import {designServiceData} from "../../public/orangeData/orangeData";
import CustomGrid from "../CustomGrid";

export default function DesignService() {
  return (
    <>
      <Box pb={4} sx={{ textAlign: "center", backgroundColor: "#FBFBFB" }}>
        <Stack sx={{ textAlign: "center" }} ml={{ md: 15, xs: 2 }} mr={{ md: 15, xs: 2 }} >
          <Typography sx={{ color: "#3F3D56" }} mt={1} variant="h4" component="h1" >
            خدمات التصميم
          </Typography>

          <Grid mt={2} container direction="row" columnSpacing={3} rowSpacing={3} >
            {designServiceData.map((data) => (
              <CustomGrid key={data.id} imageUrl={data.imageUrl} title={data.title} />
            ))}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
