import { Avatar, Box, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledBox = styled(Box)(({ theme }) => {
  return {
    width: 270,
    height: 330,
    borderRadius: 15,
    fontSize: 20,
    [theme.breakpoints.only("xs")]: {
      width: 235,
      height: 260,
    },
  };
});

export default function CustomersReviewCard({
  text,
  vector,
  userImage,
  color,
}) {
  return (
    <StyledBox>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 40, lineHeight: 1, color: color }}>
            “
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "inherit",
              lineHeight: "inherit",
              px: "18%",
              pb: "3%",
            }}
          >
            {text}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 90,
              height: 90,
              zIndex: 1,
              position: "absolute",
              // border: "2px solid white",
              mb: 7,
              borderRadius: "50%",
            }}
          >
            <div style={{ borderRadius: "50%", overflow: "hidden" }}>
              <Image
                src={userImage}
                width={"100%"}
                height={"100%"}
                objectFit="fill"
              />
            </div>
          </Box>

          <Box
            component="img"
            alt="vector"
            src={vector}
            sx={{ width: "100%", height: "auto" }}
          />
        </CardActions>
      </Card>
    </StyledBox>
  );
}
