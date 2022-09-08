import { Box } from "@mui/material";
import Image from "next/image";
import ErrorImg from "../public/images/errorImg.svg";

export default function Error() {
    return (
        <Box height={{md:"600px", xs:"300px"}} width={1} sx={{textAlign: 'center'}}>
            <Image
            priority
            alt="Faqs Image"
            src={ErrorImg} 
            />
        </Box >
    );
}