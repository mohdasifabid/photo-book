import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { ImageCard } from "./ImageCard";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Body = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const startingIndex = page * 20;
  const slicedData = data.slice(startingIndex, startingIndex + 20);
  const pageHandler = (event: {}, value: number) => setPage(value);
  const count = data.length / 20;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(res.data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack>
        <CircularProgress color="primary" />
      </Stack>
    </Box>
  ) : (
    <Box padding="2rem" display="flex" flexDirection="column" height="100%" >
      <Box flexGrow="1" display="flex" gap="1rem" flexWrap="wrap" justifyContent="center" padding="1rem .70rem">
        {slicedData?.map(({ thumbnailUrl, id, title }) => {
          return <ImageCard key={id} img={thumbnailUrl} title={title} />;
        })}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexBasis="5rem"
        padding="1rem"
      >
        <Pagination
          count={count - 1}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={pageHandler}
        />
      </Box>
    </Box>
  );
};
