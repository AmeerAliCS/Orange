import { Paper, Grid, Typography, Stack, Container } from "@mui/material";
import { styled } from '@mui/system';
import Card from "../Card";

const Item = styled(Paper)({
  backgroundColor: 'aliceblue',
  padding: 18,
});

export default function ProgrammingService() {
    return (
      <>
      <Container>
      <Stack mt={6} sx={{textAlign: 'center'}}>
          <Typography variant="h4" component="h1">
              المشاريع البرمجية
          </Typography>

        <Grid mt={4} container direction='row' columnSpacing={2} rowSpacing={2}>

          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>


        </Grid>
      </Stack>
      </Container>
      </>
    );
  }
  