import { Box, Button, Grid, Slide, Typography } from "@mui/material";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
export default function Hero() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
              اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى
              جودة واحدث التقنيات وبأنسب الاسعار
            </Typography>
          </motion.div>
          <Grid item>
            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
