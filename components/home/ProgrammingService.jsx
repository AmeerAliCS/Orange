import { Paper, Grid, Typography, Stack, Container } from "@mui/material";
import { styled } from '@mui/system';
import Card from "../Card";

const Item = styled(Paper)({
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
              <Card imgUrl='desktop_icon.svg'/>
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الدسكتوب</Typography>
              </Item>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة تطبيقات الموبايل</Typography>
              </Item>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>تصميم مواقع الكترونية</Typography>
              </Item>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>UI/UX تصميم واجهات</Typography>
              </Item>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة مشاريع التخرج</Typography>
              </Item>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Item>
              <Card />
              <Typography variant="h5" sx={{marginTop: '5%'}}>برمجة مشاريع للشركات</Typography>
              </Item>
          </Grid>


        </Grid>
      </Stack>
      </Container>
      </>
    );
  }
  