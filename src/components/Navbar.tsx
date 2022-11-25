import { PropsWithChildren } from "react";
import { Box, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface NavbarProps {
  brandName: string;
}
export const Navbar: React.FC<PropsWithChildren<NavbarProps>> = ({
  brandName,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" bgcolor={"#F7C59F"} alignItems="center" padding="1rem" color="#1A659E" flexBasis="795px">
      <Typography variant="h4">{brandName}</Typography>
      <AccountCircleOutlinedIcon fontSize="large"/>
    </Box>
  );
};
