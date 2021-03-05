import { Box, Heading } from "@chakra-ui/react";

import { MAX_WIDTH } from "../../config";

const Container = ({ title, children }) => (
  <>
    <Box
      as="section"
      px={[4, 8, 12, 16]}
      minH="100vh"
      maxW={MAX_WIDTH}
      mx="auto"
    >
      <Heading
        as="h1"
        color="white"
        pt="1rem"
        fontSize={{ base: "1.5rem", lg: "1.75rem" }}
      >
        {title}
      </Heading>

      <Box className="cardsContainer">{children}</Box>
    </Box>
  </>
);

export default Container;
