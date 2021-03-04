import { useState } from "react";
import { Box, List } from "@chakra-ui/react";

import { movie, tv, people } from "../../config";
import HamburgerMenu from "../UI/header/hamburgerMenu";
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
      {/* <Box
        as="nav"
        display={{ base: "none", lg: "flex" }}
        justifyContent="space-between"
        w="75%"
      >
        <LinksMenuTemplate title="Movies" data={movie} />
        <LinksMenuTemplate title="Tv Shows" data={tv} />
        <LinksMenuTemplate title="People" data={people} />
        <SearchBar />
      </Box> */}

      <Box as="nav" w={{ lg: "75%" }}>
        <List
          bg={{ base: "tailwindCyan.900", lg: "transparent" }}
          boxShadow={{ base: "2xl", lg: "none" }}
          display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={{ lg: "space-between" }}
          alignItems={{ lg: "center" }}
          rounded={{ base: "lg", lg: "none" }}
          pos={{ base: "absolute", lg: "static" }}
          top="60px"
          left="5%"
          right="5%"
          px={{ base: "4", lg: "0" }}
          py={{ base: "2", lg: "0" }}
          zIndex={{ base: "2", lg: "0" }}
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
