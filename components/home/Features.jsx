/* eslint-disable jsx-a11y/alt-text */
import { Box, Container, Stack, Typography } from "@mui/material";
//import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Stack
          p={10}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-around"
        >
          <motion.div
            initial={{ x: "-1000", scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            <Box>
              <img
                src="/features_icon/percent_icon.svg"
                priority
                width="140"
                height="100"
                alt="orange"
              />
              <Typography sx={{ color: "#3F3D56" }} variant="h4">
                اسعار تنافسية
              </Typography>
            </Box>
          </motion.div>
          <motion.div
            initial={{ x: "1000", scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            <Box>
              <img
                src="/features_icon/security_icon.svg"
                priority
                width="150"
                height="100"
                alt="orange"
              />
              <Typography sx={{ color: "#3F3D56" }} variant="h4">
                الموثوقية
              </Typography>
            </Box>
          </motion.div>
          <motion.div
            initial={{ y: "1000", scale: 0 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            {" "}
            <Box>
              <img
                src="/features_icon/speed_icon.svg"
                priority
                width="100"
                height="100"
                alt="orange"
              />
              <Typography sx={{ color: "#3F3D56" }} variant="h4">
                السرعة
              </Typography>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </>
  );
}
