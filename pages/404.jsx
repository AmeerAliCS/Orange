
import { Box, Typography } from "@mui/material";

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/images/IMAGE.svg"})`,
    },
};
export default function Error() {
    return (
        <Box height="750px" width={1}>
            <Box
                component="img"
                src="/images/4041.svg"
                sx={{
                    display: "-webkit-flex",
                    margin: "auto",
                    width: 750,
                }}
            />
            <Typography variant="h3"
                sx={{
                    color: "#ff7700",
                    pt: 15,

                    textAlign: "center"
                }}
            >
                !!! يبدو أن هناك شيء خاطئ
            </Typography>
        </Box >
    );
}