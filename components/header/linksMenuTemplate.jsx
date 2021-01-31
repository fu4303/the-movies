import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  List,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const LinksMenuTemplate = ({ title, data }) => (
  <>
    <List>
      <Menu>
        {({ isOpen }) => (
          <>
            <Box as="li">
              <MenuButton
                as={Button}
                color="white"
                fontWeight="500"
                variant="ghost"
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                _hover={{ background: "tailwindCyan.800" }}
                _focus={{ outline: "none" }}
                _active={{ background: "tailwindCyan.800", outline: "none" }}
              >
                {title}
              </MenuButton>

              <MenuList color="black">
                {data.map((item) => (
                  <MenuItem
                    cursor="pointer"
                    _hover={{ outline: "none", background: "tailwindGray.100" }}
                    _focus={{ outline: "none" }}
                    key={item.title}
                  >
                    <NextLink href={item.href}>
                      <a style={{ width: "100%" }}>{item.title}</a>
                    </NextLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Box>
          </>
        )}
      </Menu>
    </List>
  </>
);

export default LinksMenuTemplate;
