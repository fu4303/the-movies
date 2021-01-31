import { Box } from "@chakra-ui/react";
import Hamburger from "hamburger-react";

const HamburgerMenu = ({ isOpen, setIsOpen }) => (
  <>
    <Box display={{ lg: "none" }}>
      <Hamburger
        size="25"
        direction="right"
        toggled={isOpen}
        toggle={setIsOpen}
      />
    </Box>
  </>
);

export default HamburgerMenu;
