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
    marginBottom: 55,
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
              width: 80,
              height: 80,

              position: "absolute",

              mb: "3%",
            }}
          >
            <Box
              sx={{
                width: 1,
                height: 1,
                border: "3px solid white",
                borderRadius: "50%",
                zIndex: 1,
                position: "absolute",
              }}
              // loading="lazy"
            >
              <Image
                alt="اراء الزبائن بخدماتنا"
                loading="lazy"
                src={userImage}
                layout="fill"
                style={{ zInsex: 1, position: "absolute", borderRadius: "50%" }}
              />
            </Box>
          </Box>

          <Image src={vector} width={270} height={135} alt="اراء الزبائن " />
        </CardActions>
      </Card>
    </StyledBox>
  );
}
