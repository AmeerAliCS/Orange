import { Container, Stack } from "@mui/material";
import Image from "next/image";
const faqImage = "/faqs_icon/faqs.svg";

export default function Faqs() {
  return (
    <>
      <Container sx={{ marginTop: "2rem" }}>
        <Stack direction="row" justifyContent="center">
          <Image
            loading="lazy"
            height="200rem"
            width="300rem"
            alt="الاسئله الشائعة | منصة اورنج لخدمات البرمجة والتصميم"
            src={faqImage}
          />
        </Stack>
      </Container>
    </>
  );
}
