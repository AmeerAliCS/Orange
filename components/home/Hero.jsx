import { Box, Button, Grid, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box>
      <Grid container spacing={2} sx={{ pt: 10 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="Futuristi.gif"
            sx={{ height: 600, width: 750 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            item
            container
            spacing={0}
            sx={{ height: { md: 1, xs: 1 }, width: 1, pt: 5 }}
            direction="column"
            alignItems="center"
          >
            <Typography
              sx={{
                color: "black",
                pt: "15vw",
                pl: "4vw",
                pr: "10vw",
              }}
              variant="h4"
              component="h6"
              align="right"
            >
              اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى
              جودة واحدث التقنيات وبأنسب الاسعار
            </Typography>
            <Grid item>
              <Button
                style={{
                  borderRadius: 30,
                  backgroundColor: "#FF7700",
                  padding: "10px 20px",
                  fontSize: "18px",
                  width: "250px",
                  marginTop: "5vh",
                }}
                variant="contained"
              >
                تواصل معنا
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
