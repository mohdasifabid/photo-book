import { Box } from "@mui/system";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type childrenType = {
  children: JSX.Element;
};
export const Layout = ({ children }: childrenType) => {
  return (
    <Box display="flex" flexDirection="column" height="98vh" >
      <Navbar brandName="Photo-Book" />
      <Box flexGrow="1">{children}</Box>
      <Footer />
    </Box>
  );
};
