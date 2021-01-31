import { Box, chakra, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const CardInfo = ({ href, name, job, character }) => (
  <>
    <Box px="1rem" pb="0.5rem">
      <NextLink href={href}>
        <chakra.a fontSize="1.1rem" fontWeight="500" pb="0.25rem">
          {name}
        </chakra.a>
      </NextLink>
      <Text color="tailwindGray.700" fontSize="sm" fontWeight="300">
        {job && (
          <>
            <Text as="span" fontSize="md" fontWeight="500" color="black">
              Known for:{" "}
            </Text>
            {job}
          </>
        )}
        {character}
      </Text>
    </Box>
  </>
);

export default CardInfo;
