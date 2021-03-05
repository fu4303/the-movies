import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, POSTER_SIZE, PROFILE_SIZE } from "../../config";
import { MediaCardsInfo, PeopleCardsInfo } from "./mediaCardsInfo";
import CircularProgressbar from "../shared/circularProgressbar";

const CardContainer = ({ children }) => (
  <>
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
    >
      {children}
    </Box>
  </>
);

export const MediaCards = (props) => {
  const { data, mediaType, pId, isMovie } = props;

  return (
    <>
      {data.map((media) => {
        const mediaUrl = `/${mediaType}/${pId}/${media.id}`;

        return (
          <CardContainer key={media.id}>
            <NextLink href={mediaUrl}>
              <a aria-label={`${isMovie ? media.title : media.name} Poster`}>
                {media.poster_path ? (
                  <NextImage
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}
                    height={513}
                    width={342}
                    alt={isMovie ? media.title : media.name}
                    title={isMovie ? media.title : media.name}
                    className="mediaImage"
                  />
                ) : (
                  <Box roundedTop="lg" bg="tailwindGray.400">
                    <NextImage
                      src="/image.svg"
                      height={513}
                      width={342}
                      alt="image-icon ionicons ionicons-icon"
                      title={isMovie ? media.title : media.name}
                      className="fallBackMediaImage"
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
          </CardContainer>
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
          <CardContainer key={person.id}>
            <NextLink href={personURL}>
              <a aria-label={`${person.name} Profile image`}>
                {person.profile_path ? (
                  <NextImage
                    src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`}
                    width={300}
                    height={449}
                    alt={person.name}
                    title={person.name}
                    className="mediaImage"
                  />
                ) : (
                  <Box roundedTop="lg" bgColor="tailwindGray.400">
                    <NextImage
                      src="/person-sharp.svg"
                      width={300}
                      height={449}
                      alt="person-sharp-icon ionicons ionicons-icon"
                      title={person.name}
                      className="fallBackMediaImage"
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
          </CardContainer>
        );
      })}
    </>
  );
};
