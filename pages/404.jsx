
import { Box, Typography } from "@mui/material";

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/images/IMAGE.svg"})`,
    },
};
export default function Error() {
    return (
        <Box height={{md:"600px", xs:"300px"}} width={1}>
            <Box
                component="img"
                src="/images/4041.svg"
                sx={{
                    display: "-webkit-flex",
                    margin: "auto",
                    width: {md:750,xs:1},
                }}
            />
       
        </Box >
    );
}