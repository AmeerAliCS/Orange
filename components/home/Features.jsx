/* eslint-disable jsx-a11y/alt-text */
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Stack p={10} direction={{ xs: 'column', sm: 'row' }} justifyContent="space-around">
          <Box>
            <Image
              src="/features_icon/percent_icon.svg"
              width="140"
              height="100"
            />
            <Typography sx={{color: "#3F3D56"}} variant="h4">اسعار تنافسية</Typography>
          </Box>
          <Box>
            <Image
              src="/features_icon/security_icon.svg"
              width="150"
              height="100"
            />
            <Typography sx={{color: "#3F3D56"}} variant="h4">الموثوقية</Typography>
          </Box>
          <Box>
            <Image
              src="/features_icon/speed_icon.svg"
              width="100"
              height="100"
            />
            <Typography sx={{color: "#3F3D56"}} variant="h4">السرعة</Typography>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
