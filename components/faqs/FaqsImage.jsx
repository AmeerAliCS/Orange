import { Container, Stack } from "@mui/material";
//import Image from "next/image";
const faqImage = "/faqs_icon/faqs.svg";

export default function Faqs() {
  return (
    <>
      <Container sx={{ marginTop: "2rem" }}>
        <Stack direction="row" justifyContent="center">
          <img
            height="200rem"
            // alignSelf="center"
            width="300rem"
            alt="Faqs Image"
            priority
            src={faqImage}
          />
        </Stack>
      </Container>
    </>
  );
}
