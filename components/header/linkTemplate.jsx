import { useState } from "react";
import { chakra, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkTemplate = ({ title, data, closeNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ListItem w="0" whiteSpace="nowrap" onClick={handleClick}>
        <chakra.button
          fontSize="lg"
          fontWeight="500"
          bgColor={isOpen && "tailwindCyan.800"}
          rounded="lg"
          transitionDuration="250ms"
          my="1"
          py="1"
          px="2"
          _hover={{ background: "tailwindCyan.800" }}
          _focus={{ outline: "none" }}
        >
          {title}
        </chakra.button>

        <List display={isOpen ? "block" : "none"} rounded="lg">
          {data.map((item, index) => (
            <ListItem
              py="1"
              ml="5"
              title={`${item.title} ${title}`}
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
