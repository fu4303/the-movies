import { Box, Heading } from "@chakra-ui/react";
import { MAX_WIDTH } from "../../config";

import styles from "./styles/cardContainer.module.css";

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
        fontSize={{ base: "1.25em", sm: "1.5rem", md: "1.85rem" }}
        fontWeight="500"
        pt="1rem"
      >
        {title}
      </Heading>
      <Box className={styles.container}>{children}</Box>
    </Box>
  </>
);

export default Container;
