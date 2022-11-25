import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { ImageCard } from "./ImageCard";

export const Body = () => {
  return (
    <Box padding="2rem" display="flex" flexDirection="column" height="100%">
      <Box flexGrow="1">
        <ImageCard
          img="https://picsum.photos/id/237/200/300"
          title="some title"
        />
      </Box>
      <Box  display="flex" justifyContent="center" flexBasis="5rem" padding="1rem">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Box>
    </Box>
  );
};
