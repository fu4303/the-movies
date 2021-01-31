import { Box, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

import Date from "../shared/date";

const CardInfo = ({ href, title, date }) => (
  <>
    <Box px="1rem" pb="0.5rem">
      <NextLink href={href}>
        <a>
          <Heading as="h1" fontSize="1rem" fontWeight="500" pb="0.25rem">
            {title}
          </Heading>
        </a>
      </NextLink>
      {date && (
        <Box as={Date} color="gray.600" fontSize="sm" datestring={date} />
      )}
    </Box>
  </>
);

export default CardInfo;
