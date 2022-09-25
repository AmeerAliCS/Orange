import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
export default function Hero(props) {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        height: { md: 1 },
        width: { md: 1 },
        pt: { xs: 2, md: 7 },

        pl: { md: 8 },
      }}
    >
      <Grid item xs={12} md={6}>
        <motion.div
          animate={{
            scale: 1.05,
            transition: { yoyo: 5, duration: 1 },
          }}
        >
          <Image
            draggable="false"
            alt="منصة اورنج لتصميم التطبيقات والمواقع الالكترونية"
            src={props.imgUrl}
            width={"750"}
            height={"550"}
            priority
          />
        </motion.div>
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
                pt: { xs: 1, md: 12 },
                pr: { xs: 5, md: 8 },
                pl: { xs: 5, md: 4 },
                fontSize: { xs: 20, sm: 30 },
                textAlign: "justify",
                direction: "rtl",
              }}
              variant="h4"
              component="h6"
              align="right"
            >
              {props.text}
            </Typography>
          </motion.div>

          {props.disabledButton ? null : (
            <Grid item>
              <motion.div
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileTap={{ scale: 0.9 }}
              >
                <Link href="/contact">
                  <Button
                    style={{
                      borderRadius: 20,
                      backgroundColor: "#FF7700",
                      padding: "10px 20px",
                      fontSize: "22px",
                      width: "10rem",
                      marginTop: "5vh",
                    }}
                    variant="contained"
                  >
                    تواصل معنا
                  </Button>
                </Link>
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
