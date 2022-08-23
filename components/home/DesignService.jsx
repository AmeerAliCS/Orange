/* eslint-disable jsx-a11y/alt-text */
import { Paper, Grid, Typography, Stack, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";
import DesignData from "../../pages/design_service_data";

const Item = styled(Paper)({
  paddingTop: 25,
  paddingBottom: 12,
  borderRadius: 15,
});

export default function DesignService() {
  return (
    <>
      <Box pb={4} sx={{ textAlign: "center", backgroundColor: "#FBFBFB" }}>
        <Stack
          sx={{ textAlign: "center" }}
          ml={{ md: 15, xs: 2 }}
          mr={{ md: 15, xs: 2 }}
        >
          <Typography
            sx={{ color: "#3F3D56" }}
            mt={1}
            variant="h4"
            component="h1"
          >
            خدمات التصميم
          </Typography>

          <Grid
            mt={2}
            container
            direction="row"
            columnSpacing={3}
            rowSpacing={3}
          >
            {DesignData.map((data) => (
              <Grid key={data.id} item xs={6} sm={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  viewport={{ once: true }}
                >
                  {" "}
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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
