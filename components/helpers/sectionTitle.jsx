import { Box, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

export const SectionTitle = (props) => (
  <>
    <Box {...props}>
      <NextLink href={props.href || "/"}>
        <chakra.a
          href={props.href || "/"}
          fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          fontWeight="600"
        >
          {props.children}
        </chakra.a>
      </NextLink>
    </Box>
  </>
);
