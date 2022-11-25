import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor={"#F7C59F"}
      alignItems="center"
      padding="1rem"
      color="#1A659E"
    >
      <Box display="flex" gap="1rem">
        <LinkedInIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
      </Box>
    </Box>
  );
};
