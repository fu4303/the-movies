import NextImage from "next/image";

import { IMAGE_BASE_URL, POSTER_SIZE, PROFILE_SIZE } from "../../config";
import { MediaInfoCard } from "./infoCard";
import { PersonInfoCard } from "./infoCard";
import { Box } from "@chakra-ui/react";
import Container from "./container";
import Backdrop from "./backdrop";

import styles from "./styles/heroSection.module.css";

export const MediaHeroSection = (props) => (
  <>
    <Backdrop backdropPath={props.backdrop} isMinHeightScreenFull>
      <Container backBtnHref={props.backBtnHref}>
        {props.poster ? (
          <Box
            className={styles.mediaImageContainer}
            alignSelf="center"
            display="flex"
          >
            <NextImage
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.poster}`}
              alt={props.title}
              title={props.title}
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
              title={props.title}
              alt="image-icon ionicons ionicons-icon"
              width="342"
              height="513"
              priority
              layout="fixed"
              className={styles.fallBackMediaImage}
            />
          </Box>
        )}

        <MediaInfoCard
          href={`/${props.mediaType}/${props.pId}/${props.mediaId}`}
          {...props}
        />
      </Container>
    </Backdrop>
  </>
);

export const PersonHeroSection = (props) => (
  <>
    <Backdrop
      backdropPath={
        props.data.cast.sort((a, b) => b.popularity - a.popularity)[0]
          .backdrop_path
      }
      isMinHeightScreenFull
    >
      <Container backBtnHref={props.backBtnHref}>
        {props.profile ? (
          <Box
            className={styles.mediaImageContainer}
            alignSelf="center"
            display="flex"
          >
            <NextImage
              src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${props.profile}`}
              alt={props.name}
              title={props.name}
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
              title={props.name}
              alt="person-sharp-icon ionicons ionicons-icon"
              width="300"
              height="450"
              priority
              layout="fixed"
              className={styles.fallBackMediaImage}
            />
          </Box>
        )}

        <PersonInfoCard
          href={`/person/${props.pId}/${props.personId}`}
          {...props}
        />
      </Container>
    </Backdrop>
  </>
);
