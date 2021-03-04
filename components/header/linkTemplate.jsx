import { useState } from "react";
import { chakra, List, ListItem, useBreakpointValue } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const LinkTemplate = ({ title, data, closeNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const btnBgColor = useBreakpointValue({
    base: "tailwindCyan.800",
    md: "transparent",
  });

  return (
    <>
      <ListItem
        w={{ base: "0", lg: "auto" }}
        whiteSpace="nowrap"
        onClick={() => setIsOpen(!isOpen)}
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <chakra.button
          display="flex"
          flexDir={{ lg: "row-reverse" }}
          alignItems="center"
          fontSize="lg"
          fontWeight="500"
          bgColor={{ base: isOpen && "tailwindCyan.800", lg: "transparent" }}
          rounded="lg"
          transitionDuration="250ms"
          my={{ base: "1", lg: "0" }}
          py={{ base: "1", lg: "3" }}
          px={{ base: "2", lg: "0" }}
          _hover={{ background: btnBgColor }}
          _focus={{ outline: "none" }}
        >
          {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          {title}
        </chakra.button>

        <List
          color={{ lg: "black" }}
          display={isOpen ? "block" : "none"}
          rounded="lg"
          pos={{ lg: "absolute" }}
          top="50px"
          bg={{ lg: "gray.50" }}
          py={{ lg: "2" }}
          minW={{ lg: "12rem" }}
          zIndex={{ lg: "2" }}
        >
          {data.map((item, index) => (
            <ListItem
              py="1"
              ml={{ base: "5", lg: "0" }}
              pl={{ lg: "5" }}
              aria-label={`${item.title} ${title}`}
              _hover={{ bgColor: "gray.200" }}
              key={index}
            >
              <NextLink href={item.href}>
                <chakra.a
                  href={item.href}
                  display="table"
                  w="full"
                  rounded="md"
                  onClick={closeNav}
                >
                  {item.title}
                </chakra.a>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </ListItem>
    </>
  );
};

export default LinkTemplate;
