import { Box, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => (
  <>
    <Box>
      <NextLink href="/">
        <chakra.a fontSize="1.5rem" fontWeight="600" userSelect="none" href="/">
          The Movies
        </chakra.a>
      </NextLink>
    </Box>
  </>
);

export default Logo;
