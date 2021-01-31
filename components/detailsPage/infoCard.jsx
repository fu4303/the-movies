import NextLink from "next/link";

import { calculateAge } from "../helpers/calculateAge";
import { convertMinutesToHours } from "../helpers/convertMinutesToHours";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Date from "../shared/date";
import CircularProgressbar from "../shared/circularProgressbar";
import MediaDesc from "./mediaDesc";

import styles from "./styles/infoCard.module.css";

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
      className={styles.container}
    >
      {children}
    </Box>
  </>
);

export const MediaInfoCard = (props) => (
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
            <NextLink href={props.href}>
              <a>{props.title}</a>
            </NextLink>
          </ListItem>

          {!props.isHomePage && (
            <ListItem>
              {props.genres &&
                props.genres.map((genre) => genre.name).join(", ")}
            </ListItem>
          )}

          <ListItem display="inline-block">
            {props.releaseDate && <Date datestring={props.releaseDate} />}
          </ListItem>

          {!props.isHomePage && (
            <>
              <ListItem display="inline-block">
                {", "}
                {props.runtime && convertMinutesToHours(props.runtime)}
              </ListItem>
            </>
          )}

          {!props.isHomePage && (
            <ListItem fontWeight="300" pt="0.5rem">
              {props.tagline && <Text as="i">{props.tagline}</Text>}
            </ListItem>
          )}
        </List>
        <CircularProgressbar
          value={props.voteAverage}
          size={{ base: "12", lg: "13" }}
          fontSize={{ base: "11px", lg: "12" }}
        />
      </Box>
      <List py="0.5rem">
        <MediaDesc title="Overview" description={props.overview} />

        {!props.isHomePage && (
          <ListItem>
            <Text
              as="span"
              fontSize="lg"
              fontWeight={{ base: "500", lg: "600" }}
            >
              Spoken language:{" "}
            </Text>
            {props.spokenLanguages
              ? props.spokenLanguages
                  .map((lang) => lang.english_name)
                  .join(", ")
              : "-"}
          </ListItem>
        )}
      </List>
    </InfoCardContainer>
  </>
);

export const PersonInfoCard = (props) => (
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
            <NextLink href={props.href}>
              <a>{props.name}</a>
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
            {props.birthday ? (
              <>
                <Date datestring={props.birthday} />
                {", "}
                {`${calculateAge(props.birthday)} years old`}
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
            {props.placeOfBirth ? props.placeOfBirth : "-"}
          </ListItem>

          <ListItem>
            <Text
              as="span"
              fontSize="lg"
              fontWeight={{ base: "500", lg: "600" }}
            >
              Known For:{" "}
            </Text>
            {props.knownFor ? props.knownFor : "-"}
          </ListItem>

          <ListItem>
            <Text
              as="span"
              fontSize="lg"
              fontWeight={{ base: "500", lg: "600" }}
            >
              Gender:{" "}
            </Text>
            {props.gender ? (props.gender == 1 ? "Female" : "Male") : "-"}
          </ListItem>
        </List>
      </Box>

      <List py="0.5rem">
        <MediaDesc title="Biography" description={props.biography} />
      </List>
    </InfoCardContainer>
  </>
);
