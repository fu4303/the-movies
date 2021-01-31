import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const BackBtn = ({ href }) => (
  <>
    <NextLink href={href}>
      <chakra.a
        href={href}
        bgColor="tailwindCyan.700"
        fontWeight="600"
        rounded="lg"
        px="8"
        py="2"
        style={{
          WebkitBoxShadow: "0px 0px 0px 4px rgba(8,145,178,0.5)",
          boxShadow: "0px 0px 0px 4px rgba(8,145,178,0.5)",
        }}
      >
        Back
      </chakra.a>
    </NextLink>
  </>
);

export default BackBtn;
