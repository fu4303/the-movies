import NextLink from "next/link";

import { calculateAge } from "../helpers/calculateAge";
import { convertMinutesToHours } from "../helpers/convertMinutesToHours";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Date from "../shared/date";
import CircularProgressbar from "../shared/circularProgressbar";
import MediaDesc from "./mediaDesc";

const InfoCardContainer = ({ children }) => (
  <>
    <Box
      w="full"
      color="black"
      rounded="xl"
      py="0.5rem"
      px="1rem"
      mt={{ base: "1rem", lg: "0" }}
      ml={{ lg: "1.25rem" }}
      className="infoCardContainer"
    >
      {children}
    </Box>
  </>
);

export const MediaInfoCard = (props) => {
  const {
    href,
    title,
    genres,
    releaseDate,
    runtime,
    tagline,
    voteAverage,
    overview,
    spokenLanguages,
  } = props;

  return (
    <>
      <InfoCardContainer>
        <Box display="flex" justifyContent="space-between">
          <List>
            <ListItem
              fontSize={{ base: "2xl", lg: "3xl" }}
              fontWeight="600"
              pt="0.25rem"
              pb="0.5rem"
            >
              <NextLink href={href}>
                <a>{title}</a>
              </NextLink>
            </ListItem>

            {genres && (
              <ListItem>
                {genres.map((genre) => genre.name).join(", ")}
              </ListItem>
            )}

            {releaseDate && (
              <ListItem display="inline-block">
                <Date datestring={releaseDate} />
              </ListItem>
            )}

            {runtime && (
              <ListItem display="inline-block">
                {", "}
                {convertMinutesToHours(runtime)}
              </ListItem>
            )}

            {tagline && (
              <ListItem fontStyle="italic" fontWeight="300" pt="0.5rem">
                {tagline}
              </ListItem>
            )}
          </List>

          <CircularProgressbar
            value={voteAverage}
            size={{ base: "12", lg: "13" }}
            fontSize={{ base: "11px", lg: "12" }}
          />
        </Box>
        <List py="0.5rem">
          <MediaDesc title="Overview" description={overview} />

          <ListItem>
            <Text
              as="span"
              fontSize="lg"
              fontWeight={{ base: "500", lg: "600" }}
            >
              Spoken language:{" "}
            </Text>
            {spokenLanguages
              ? spokenLanguages.map((lang) => lang.english_name).join(", ")
              : "-"}
          </ListItem>
        </List>
      </InfoCardContainer>
    </>
  );
};

export const PersonInfoCard = (props) => {
  const {
    href,
    name,
    birthday,
    placeOfBirth,
    knownFor,
    gender,
    biography,
  } = props;

  return (
    <>
      <InfoCardContainer>
        <Box display="flex" justifyContent="space-between">
          <List>
            <ListItem
              fontSize={{ base: "2xl", lg: "3xl" }}
              fontWeight="600"
              pt="0.25rem"
              pb="0.5rem"
            >
              <NextLink href={href}>
                <a>{name}</a>
              </NextLink>
            </ListItem>
            <ListItem>
              <Text
                as="span"
                fontSize="lg"
                fontWeight={{ base: "500", lg: "600" }}
              >
                Birthday:{" "}
              </Text>
              {birthday ? (
                <>
                  <Date datestring={birthday} />
                  {", "}
                  {`${calculateAge(birthday)} years old`}
                </>
              ) : (
                "-"
              )}
            </ListItem>
            <ListItem>
              <Text
                as="span"
                fontSize="lg"
                fontWeight={{ base: "500", lg: "600" }}
              >
                Place of Birth:{" "}
              </Text>
              {placeOfBirth ? placeOfBirth : "-"}
            </ListItem>

            <ListItem>
              <Text
                as="span"
                fontSize="lg"
                fontWeight={{ base: "500", lg: "600" }}
              >
                Known For:{" "}
              </Text>
              {knownFor ? knownFor : "-"}
            </ListItem>

            <ListItem>
              <Text
                as="span"
                fontSize="lg"
                fontWeight={{ base: "500", lg: "600" }}
              >
                Gender:{" "}
              </Text>
              {gender ? (gender == 1 ? "Female" : "Male") : "-"}
            </ListItem>
          </List>
        </Box>

        <List py="0.5rem">
          <MediaDesc title="Biography" description={biography} />
        </List>
      </InfoCardContainer>
    </>
  );
};
