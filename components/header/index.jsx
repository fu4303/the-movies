import { Box } from "@chakra-ui/react";
import { MAX_WIDTH } from "../../config";

import Logo from "../UI/logo";
import Navbar from "./navbar";

const Header = () => (
  <>
    <Box as="header" color="white" bgColor="tailwindCyan.900">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="50px"
        maxW={MAX_WIDTH}
        mx="auto"
        px={[4, 8, 12, 16]}
      >
        <Logo />
        <Navbar />
      </Box>
    </Box>
  </>
);

export default Header;
