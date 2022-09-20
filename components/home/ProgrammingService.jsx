/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography, Stack, Box } from "@mui/material";
import Image from "next/image";
import { programmingServiceData } from "../../public/orangeData/orangeData";
import CustomGrid from "../CustomGrid";
const Dotted = "/dotted.svg";

export default function ProgrammingService() {
  return (
    <>
      <Box
        id="service"
        sx={{ textAlign: "center", backgroundColor: "#FBFBFB" }}
      >
        <Stack
          mb={{ md: 3, xs: 4 }}
          ml={{ md: 15, xs: 2 }}
          mr={{ md: 15, xs: 2 }}
        >
          <Typography
            sx={{ color: "#3F3D56" }}
            mt={6}
            variant="h4"
            component="h1"
          >
            الخدمات البرمجية
          </Typography>

          <Grid
            mt={2}
            container
            direction="row"
            columnSpacing={3}
            rowSpacing={3}
          >
            {/* width="70rem" */}

            {programmingServiceData.map((data) => (
              <CustomGrid
                key={data.id}
                imageUrl={data.imageUrl}
                title={data.title}
              />
            ))}
          </Grid>
        </Stack>

        <Image
          draggable="false"
          loading="lazy"
          src={Dotted}
          width="100"
          height="100"
          alt="منصة اورنج لخدمات البرمجة والتصميم | الخدمات البرمجية"
        />
      </Box>
    </>
  );
}
