import { Box, Grid, Stack, Typography } from '@mui/material';
import OurDesignData from '../../pages/our_design_data'
import CustomGrid from "../CustomGrid"

export default function OurDesign() {
    return (
         <>
           <Box sx={{ textAlign: "center", backgroundColor: "#FBFBFB" }} >
            <Stack mb={{ md: 3, xs: 4 }} ml={{ md: 15, xs: 2 }} mr={{ md: 15, xs: 2 }} >
              <Typography sx={{ color: "#3F3D56" }} mt={6} variant="h4" component="h1" >
                بعض من تصاميمنا
              </Typography>
    
              <Grid mt={2} container direction="row" columnSpacing={3} rowSpacing={3} >
                 {/* width="70rem" */}
             
                {OurDesignData.map((data) => (
                  <CustomGrid key={data.id} imageUrl={data.imageUrl} title={data.title} />
                ))}
              </Grid>
            </Stack>
          </Box>
         </>
      );
  }
  