import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

import { IMAGE_BASE_URL, POSTER_SIZE, PROFILE_SIZE } from "../../config";
import { MediaInfoCard, PersonInfoCard } from "./infoCard";
import Container from "./container";
import Backdrop from "./backdrop";

export const MediaHeroSection = (props) => {
  const {
    backdrop,
    backBtnHref,
    poster,
    title,
    mediaType,
    pId,
    mediaId,
  } = props;

  return (
    <>
      <Backdrop backdropPath={backdrop}>
        <Container backBtnHref={backBtnHref}>
          {poster ? (
            <Box
              className="heroSectionContainer"
              alignSelf="center"
              display="flex"
            >
              <NextImage
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster}`}
                width="342"
                height="513"
                layout="fixed"
                alt={title}
                title={title}
                priority
                className="heroSectionPoster"
              />
            </Box>
          ) : (
            <Box
              className="heroSectionContainer"
              alignSelf="center"
              bgColor="tailwindGray.400"
            >
              <NextImage
                src="/image.svg"
                width="342"
                height="513"
                layout="fixed"
                title={title}
                alt="image-icon ionicons ionicons-icon"
                className="fallBackMediaImage"
              />
            </Box>
          )}

          <MediaInfoCard href={`/${mediaType}/${pId}/${mediaId}`} {...props} />
        </Container>
      </Backdrop>
    </>
  );
};

export const PersonHeroSection = (props) => {
  const { data, backBtnHref, profile, name, personId } = props;

  return (
    <>
      <Backdrop
        backdropPath={
          data.cast.sort((a, b) => b.popularity - a.popularity)[0].backdrop_path
        }
      >
        <Container backBtnHref={backBtnHref}>
          {profile ? (
            <Box
              className="heroSectionContainer"
              alignSelf="center"
              display="flex"
            >
              <NextImage
                src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${profile}`}
                width="300"
                height="450"
                layout="fixed"
                alt={name}
                title={name}
                priority
                className="heroSectionPoster"
              />
            </Box>
          ) : (
            <Box
              className="heroSectionContainer"
              alignSelf="center"
              display="flex"
              bgColor="tailwindGray.400"
            >
              <NextImage
                src="/person-sharp.svg"
                width="300"
                height="450"
                layout="fixed"
                alt="person-sharp-icon ionicons ionicons-icon"
                title={name}
                className="fallBackMediaImage"
              />
            </Box>
          )}

          <PersonInfoCard href={`/person/popular/${personId}`} {...props} />
        </Container>
      </Backdrop>
    </>
  );
};
