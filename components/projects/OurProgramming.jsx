/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from "next/image";
import {ourProgrammingData} from '../../public/orangeData/orangeData';
import CustomGrid from "../CustomGrid";

export default function OurProgramming() {
    return (
        <>
          <Box sx={{ textAlign: "center", backgroundColor: "#FBFBFB", marginTop: "2rem" }} >
            <Stack mb={{ md: 3, xs: 4 }} ml={{ md: 15, xs: 2 }} mr={{ md: 15, xs: 2 }} >
              <Typography sx={{ color: "#3F3D56" }} mt={6} variant="h4" component="h1" >
                بعض من مشاريعنا البرمجية
              </Typography>
              
              <Grid mt={2} container direction="row" columnSpacing={3} rowSpacing={3} >
                {/* width="70rem" */}

                {ourProgrammingData.map((data) => (
                  <CustomGrid key={data.id} imageUrl={data.imageUrl} title={data.title} />
                ))}
              </Grid>
            </Stack>
    
            <Image src="/dotted.svg" width="100" height="100" />
          </Box>
        </>
      );
  }
  