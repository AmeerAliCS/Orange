/* eslint-disable jsx-a11y/alt-text */
import { Paper, Grid, Typography, Stack, Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import Card from "../Card";
import Image from "next/image";
import ProgrammingData from "../../pages/programming_service_data";

const Item = styled(Paper)({
  paddingTop: 25,
  paddingBottom: 12,
  borderRadius: 15,
});

export default function ProgrammingService() {
  return (
    <>
      <Box sx={{ textAlign: "center", backgroundColor: "#FBFBFB" }}>
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
            // width="70rem"
          >
            {ProgrammingData.map((data) => (
              <Grid key={data.id} item xs={6} sm={4}>
                <Item>
                  <Image src={data.imageUrl} width={700} height={455} />
                  <Typography
                    variant="h5"
                    sx={{
                      marginTop: "3%",
                      fontWeight: "bold",
                      color: "#3F3D56",
                      fontSize: { xs: 13, sm: 22 },
                    }}
                  >
                    {data.title}
                  </Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Image src="/dotted.svg" width="100" height="100" />
      </Box>
    </>
  );
}
