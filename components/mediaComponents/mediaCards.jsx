import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import CircularProgressbar from "../shared/circularProgressbar";
import CardInfo from "../mediaComponents/mediaCardInfo";

import styles from "./styles/cards.module.css";

const MediaCards = (props) => (
  <>
    {props.data.map((media) => {
      const mediaUrl = `/${props.mediaType}/${props.pId}/${media.id}`;

      return (
        <Box
          bgColor="white"
          pos="relative"
          boxShadow="lg"
          rounded="lg"
          transitionDuration="250ms"
          my="5"
          maxW={{ base: "20rem", sm: "21rem" }}
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
          <CardInfo
            href={mediaUrl}
            title={props.isTvShow ? media.name : media.title}
            date={props.isTvShow ? media.first_air_date : media.release_date}
          />
        </Box>
      );
    })}
  </>
);

export default MediaCards;
