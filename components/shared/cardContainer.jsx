import { Box } from "@chakra-ui/react";

import { MAX_WIDTH } from "../../config";
import { SectionTitle } from "../helpers/sectionTitle";

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
      <SectionTitle color="white" pt="1rem">
        {title}
      </SectionTitle>

      <Box className={styles.container}>{children}</Box>
    </Box>
  </>
);

export default Container;
