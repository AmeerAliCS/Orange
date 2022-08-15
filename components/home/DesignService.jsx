/* eslint-disable jsx-a11y/alt-text */
import { Paper, Grid, Typography, Stack, Container } from "@mui/material";
import { styled } from "@mui/system";
import Card from "../Card";
import Image from 'next/image'
import DesignData from '../../pages/design_service_data'

const Item = styled(Paper)({
  paddingTop: 25,
  paddingBottom: 12,
  borderRadius: 15,
});


export default function DesignService() {
  return (
    <>
      <Container>
        <Stack mt={2} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1">
            خدمات التصميم
          </Typography>

          <Grid
            mt={2}
            container
            direction="row"
            columnSpacing={3}
            rowSpacing={3}
          >

            {DesignData.map(data => <Grid key={data.id} item xs={6} sm={4}>
              <Item>
              <Image
                 src={data.imageUrl}
                 width={700}
                 height={455}/>
                <Typography variant="h5" sx={{ marginTop: "3%", fontWeight: 'bold', color: '#3F3D56'}}>
                  {data.title}
                </Typography>
              </Item>
            </Grid>)}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
