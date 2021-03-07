import { useState } from "react";
import { Box, List } from "@chakra-ui/react";

import { movie, tv, people } from "../../config";
import HamburgerMenu from "../UI/hamburgerMenu";
import SearchBar from "./searchBar";
import LinksMenuTemplate from "./linksMenuTemplate";
import LinkTemplate from "./linkTemplate";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        as="nav"
        display={{ base: "none", lg: "flex" }}
        justifyContent="space-between"
        w="75%"
      >
        <LinksMenuTemplate title="Movies" data={movie} />
        <LinksMenuTemplate title="Tv Shows" data={tv} />
        <LinksMenuTemplate title="People" data={people} />
        <SearchBar />
      </Box>

      <Box as="nav" display={{ lg: "none" }}>
        <List
          bg="tailwindCyan.900"
          boxShadow="2xl"
          display={isOpen ? "flex" : "none"}
          flexDir="column"
          rounded="lg"
          pos="absolute"
          top="60px"
          left="5%"
          right="5%"
          px="4"
          py="2"
          zIndex="2"
        >
          <LinkTemplate title="Movies" data={movie} closeNav={handleCloseNav} />
          <LinkTemplate title="Tv Shows" data={tv} closeNav={handleCloseNav} />
          <LinkTemplate
            title="People"
            data={people}
            closeNav={handleCloseNav}
          />
          <SearchBar />
        </List>
      </Box>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
