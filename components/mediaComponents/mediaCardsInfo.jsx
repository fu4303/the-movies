import { Box, chakra, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import Date from "../shared/date";

const Container = (props) => {
  const { href, isPerson, name, title, children } = props;

  return (
    <>
      <Box px="1rem" pb="0.5rem">
        <NextLink href={href}>
          <chakra.a href={href} fontSize="1.1rem" fontWeight="500" pb="0.25rem">
            {isPerson ? name : title}
          </chakra.a>
        </NextLink>
        {children}
      </Box>
    </>
  );
};

export const MediaCardsInfo = (props) => (
  <>
    <Container {...props}>
      {props.date && (
        <>
          <br />
          <Text
            as={Date}
            datestring={props.date}
            color="tailwindGray.700"
            fontSize="sm"
          />
        </>
      )}
    </Container>
  </>
);

export const PeopleCardsInfo = (props) => (
  <>
    <Container {...props} isPerson>
      {props.info && (
        <>
          <Text color="tailwindGray.700" fontSize="sm" fontWeight="300">
            <Text as="span" fontSize="md" fontWeight="400" color="black">
              {props.infoTitle}
            </Text>
            {props.info}
          </Text>
        </>
      )}
    </Container>
  </>
);
