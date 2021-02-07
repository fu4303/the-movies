import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, POSTER_SIZE, PROFILE_SIZE } from "../../config";
import { MediaCardsInfo, PeopleCardsInfo } from "./mediaCardsInfo";
import CircularProgressbar from "../shared/circularProgressbar";

import styles from "./styles/cards.module.css";

export const MediaCards = (props) => {
  const { data, mediaType, pId, isMovie } = props;

  return (
    <>
      {data.map((media) => {
        const mediaUrl = `/${mediaType}/${pId}/${media.id}`;

        return (
          <Box
            bgColor="white"
            pos="relative"
            boxShadow="lg"
            rounded="lg"
            transitionDuration="250ms"
            my="5"
            maxW={{ base: "20rem", sm: "21rem", md: "none" }}
            mx="auto"
            _hover={{ boxShadow: "xl" }}
            key={media.id}
          >
            <NextLink href={mediaUrl}>
              <a>
                {media.poster_path ? (
                  <NextImage
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}
                    alt={media.name}
                    title={media.name}
                    height="513"
                    width="342"
                    priority
                    className={styles.mediaImage}
                  />
                ) : (
                  <Box roundedTop="lg" bg="tailwindGray.400">
                    <NextImage
                      src="/image.svg"
                      title={media.title}
                      alt="image-icon ionicons ionicons-icon"
                      height="513"
                      width="342"
                      priority
                      className={styles.fallBackMediaImage}
                    />
                  </Box>
                )}
              </a>
            </NextLink>
            <CircularProgressbar
              value={media.vote_average}
              pos="absolute"
              left="2"
              top="2"
              size="12"
              fontSize="11px"
            />
            <MediaCardsInfo
              href={mediaUrl}
              title={isMovie ? media.title : media.name}
              date={isMovie ? media.release_date : media.first_air_date}
            />
          </Box>
        );
      })}
    </>
  );
};

export const PeopleCards = (props) => {
  const { data, pId, isCreditsPage } = props;

  return (
    <>
      {data.map((person) => {
        const personURL = `/person/${pId}/${person.id}`;

        return (
          <Box
            bgColor="white"
            pos="relative"
            boxShadow="lg"
            rounded="lg"
            transitionDuration="250ms"
            my="5"
            maxW={{ base: "20rem", sm: "none" }}
            mx="auto"
            _hover={{ boxShadow: "xl" }}
            key={person.id}
          >
            <NextLink href={personURL}>
              <a>
                {person.profile_path ? (
                  <NextImage
                    src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`}
                    title={person.name}
                    alt={person.name}
                    width="300"
                    height="449"
                    priority
                    className={styles.mediaImage}
                  />
                ) : (
                  <Box roundedTop="lg" bgColor="tailwindGray.400">
                    <NextImage
                      src="/person-sharp.svg"
                      title={person.name}
                      alt="person-sharp-icon ionicons ionicons-icon"
                      width="300"
                      height="449"
                      priority
                      className={styles.fallBackMediaImage}
                    />
                  </Box>
                )}
              </a>
            </NextLink>

            {isCreditsPage ? (
              <PeopleCardsInfo
                href={personURL}
                name={person.name}
                info={person.character}
              />
            ) : (
              <PeopleCardsInfo
                href={personURL}
                name={person.name}
                info={person.known_for_department}
                infoTitle="Job: "
              />
            )}
          </Box>
        );
      })}
    </>
  );
};
