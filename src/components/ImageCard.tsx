import { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { ImageCardTypes } from "../types";


export const ImageCard = ({img, title} : ImageCardTypes) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = (truefalse: boolean) => setIsLiked(truefalse);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {isLiked ? (
            <ThumbDownOffAltIcon onClick={() => likeHandler(false)} />
          ) : (
            <ThumbUpOffAltIcon onClick={() => likeHandler(true)} />
          )}
        </Button>
      </CardActions>
    </Card>
  );
};
