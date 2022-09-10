import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function CustomCard(props) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.imgUrl}
          alt="Card"
        />
      </CardActionArea>
    </Card>
  );
}
