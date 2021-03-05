import { chakra, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const SectionTitle = (props) => {
  const { href, children } = props;

  return (
    <>
      <Heading as="h1" {...props}>
        <NextLink href={href || "/"}>
          <chakra.a
            href={href || "/"}
            fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          >
            {children}
          </chakra.a>
        </NextLink>
      </Heading>
    </>
  );
};
