import { Container, Stack } from "@mui/material";
import Image from "next/image";
export default function Faqs () {
    return (
        <>
        <Container sx={{marginTop: '2rem'}}>
        <Stack direction="column">
         <Image
          height="200rem"
          width="200rem"
          alt="Faqs Image"
          src="/faqs_icon/faqs.svg" />
        </Stack>
        </Container>
        </>
    );
}