import { Box, Button, Grid, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        height: { md: 1 },
        width: { md: 1 },
        pt: { xs: 8, md: 15 },
        pl: { md: 8 },
      }}
    >
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          sx={{
            height: 1,
            width: 1,
          }}
          src="/images/heroImage.gif"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid
          item
          container
          spacing={0}
          sx={{ height: { md: 1, xs: 1 }, width: 1 }}
          direction="column"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "#3c3a54",
              // pl: "2vw",
              pr: "5vw",
              pt: { md: 15 },
            }}
            variant="h4"
            component="h6"
            align="right"
          >
            اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى جودة
            واحدث التقنيات وبأنسب الاسعار
          </Typography>
          <Grid item>
            <Button
              style={{
                borderRadius: 20,
                backgroundColor: "#FF7700",
                padding: "10px 20px",
                fontSize: "25px",
                width: "150px",
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
  );
}
