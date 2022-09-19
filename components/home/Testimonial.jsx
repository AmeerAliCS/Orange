import { Box, Paper, Stack, Typography } from "@mui/material";
import { testimonialData } from "../../public/orangeData/orangeData";
import { motion } from "framer-motion";
import Image from "next/image";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"Testimonial.svg"})`,
  },
};

export default function Testimonial() {
  return (
    <Paper
      square
      style={styles.paperContainer}
      sx={{
        display: "block",
        mt: "5vh",
        width: 1,
        height: { md: "20vh", xs: "20vh" },
      }}
    >
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        justifySelf="center"
        sx={{ pt: { xs: 1, md: 4 } }}
        spacing={6}
      >
        {testimonialData.map((data) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.8,
              delay: 0.2 * data.id,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Box component="div">
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                    fontSize: { md: 25, xs: 15 },
                    textAlign: { xs: "center", md: "right" },
                  }}
                >
                  {data.num}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    pr: 1,
                    fontSize: { md: 25, xs: 15 },
                    textAlign: { xs: "center", md: "right" },
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  height: { md: 60, xs: 45 },
                  width: { md: 60, xs: 45 },
                }}
              >
                {" "}
                <Image
                  loading="lazy"
                  src={data.imageUrl}
                  width={"100%"}
                  height={"100%"}
                  alt="orange"
                />
              </Box>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Paper>
  );
}
