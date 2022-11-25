import { Box } from "@mui/system";
import { ImageCard } from "./ImageCard";

export const Body = () => {
  return (
    <Box padding="2rem">
      <ImageCard img="https://picsum.photos/id/237/200/300" title="some title"/>
    </Box>
  );
};
