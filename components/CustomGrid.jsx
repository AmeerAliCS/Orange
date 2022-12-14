/* eslint-disable jsx-a11y/alt-text */
import { Paper, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";

const Item = styled(Paper)({
  paddingTop: 25,
  paddingBottom: 12,
  borderRadius: 15,

  width: "100%",
});

export default function CustomGrid(props) {
  return (
    <>
      <Grid key={props.id} item xs={6} sm={4}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            staggerChildren: 0.5,
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <Item>
            <Image
              draggable="false"
              src={props.imageUrl}
              height="250"
              width="350"
              loading="lazy"
              alt="منصة اورنج الاقسام البرمجية"
            />
            <Typography
              variant="h5"
              sx={{
                marginTop: "3%",
                fontWeight: "bold",
                color: "#3F3D56",
                fontSize: { xs: 12, sm: 21 },
              }}
            >
              {props.title}
            </Typography>
          </Item>
        </motion.div>
      </Grid>
    </>
  );
}
