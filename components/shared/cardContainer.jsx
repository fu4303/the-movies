import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { MAX_WIDTH } from "../../config";

const Container = ({ title, isTrending, children }) => {
  const router = useRouter();

  return (
    <>
      <Box
        as="section"
        px={[4, 8, 12, 16]}
        minH="100vh"
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box d="flex" justifyContent="space-between" alignItems="flex-end">
          <Heading
            as="h1"
            color="white"
            pt="1rem"
            pb={{ base: "0.4rem" }}
            fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          >
            {title}
          </Heading>

          {isTrending && (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    color="white"
                    fontSize={{ base: "1rem", lg: "1.25rem" }}
                    fontWeight="500"
                    variant="ghost"
                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    _hover={{ background: "tailwindCyan.700" }}
                    _focus={{ outline: "none" }}
                    _active={{
                      background: "tailwindCyan.700",
                      outline: "none",
                    }}
                  >
                    Menu
                  </MenuButton>

                  <MenuList>
                    <MenuItem onClick={() => router.push("?type=movie")}>
                      movie
                    </MenuItem>
                    <MenuItem onClick={() => router.push("?type=tv")}>
                      tv
                    </MenuItem>
                    <MenuItem onClick={() => router.push("?type=person")}>
                      person
                    </MenuItem>
                    <MenuItem onClick={() => router.push("?type=all")}>
                      all
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          )}
        </Box>

        <Box className="cardsContainer">{children}</Box>
      </Box>
    </>
  );
};

export default Container;
