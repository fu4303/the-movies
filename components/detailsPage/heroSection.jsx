import NextImage from "next/image";

import { IMAGE_BASE_URL, POSTER_SIZE, PROFILE_SIZE } from "../../config";
import { MediaInfoCard, PersonInfoCard } from "./infoCard";
import { Box } from "@chakra-ui/react";
import Container from "./container";
import Backdrop from "./backdrop";

import styles from "./styles/heroSection.module.css";

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
      <Backdrop backdropPath={backdrop} isMinHeightScreenFull>
        <Container backBtnHref={backBtnHref}>
          {poster ? (
            <Box
              className={styles.mediaImageContainer}
              alignSelf="center"
              display="flex"
            >
              <NextImage
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster}`}
                alt={title}
                title={title}
                width="342"
                height="513"
                priority
                layout="fixed"
                className={styles.mediaImage}
              />
            </Box>
          ) : (
            <Box
              className={styles.mediaImageContainer}
              alignSelf="center"
              bgColor="tailwindGray.400"
            >
              <NextImage
                src="/image.svg"
                title={title}
                alt="image-icon ionicons ionicons-icon"
                width="342"
                height="513"
                priority
                layout="fixed"
                className={styles.fallBackMediaImage}
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
  const { data, backBtnHref, profile, name, pId, personId } = props;

  return (
    <>
      <Backdrop
        backdropPath={
          data.cast.sort((a, b) => b.popularity - a.popularity)[0].backdrop_path
        }
        isMinHeightScreenFull
      >
        <Container backBtnHref={backBtnHref}>
          {profile ? (
            <Box
              className={styles.mediaImageContainer}
              alignSelf="center"
              display="flex"
            >
              <NextImage
                src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${profile}`}
                alt={name}
                title={name}
                width="300"
                height="450"
                priority
                layout="fixed"
                className={styles.mediaImage}
              />
            </Box>
          ) : (
            <Box
              className={styles.mediaImageContainer}
              alignSelf="center"
              display="flex"
              bgColor="tailwindGray.400"
            >
              <NextImage
                src="/person-sharp.svg"
                title={name}
                alt="person-sharp-icon ionicons ionicons-icon"
                width="300"
                height="450"
                priority
                layout="fixed"
                className={styles.fallBackMediaImage}
              />
            </Box>
          )}

          <PersonInfoCard href={`/person/${pId}/${personId}`} {...props} />
        </Container>
      </Backdrop>
    </>
  );
};
