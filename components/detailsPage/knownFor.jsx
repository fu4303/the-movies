import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, MAX_WIDTH, POSTER_SIZE } from "../../config";
import { Box, Heading } from "@chakra-ui/react";

import styles from "./styles/knownFor.module.css";

const KnownFor = (props) => (
  <>
    {props.data.cast == "" ? (
      ""
    ) : (
      <Box maxW={MAX_WIDTH} mx="auto" px={[4, 8, 12, 16]}>
        <Heading as="h1" pt="1rem" fontSize={{ base: "1.5rem", lg: "1.75rem" }}>
          Known For
        </Heading>
        <Box className={styles.container}>
          {props.data.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 6)
            .map((media) => {
              return (
                <Box
                  my="1rem"
                  boxShadow="lg"
                  transitionDuration="250ms"
                  _hover={{ boxShadow: "xl" }}
                  key={media.id}
                >
                  <NextLink href={`/${media.media_type}/popular/${media.id}`}>
                    <a>
                      {media.poster_path ? (
                        <Box display="flex">
                          <NextImage
                            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}
                            alt={media.title || media.name}
                            title={media.title || media.name}
                            width="342"
                            height="513"
                            priority
                            className={styles.mediaImage}
                          />
                        </Box>
                      ) : (
                        <Box
                          display="flex"
                          rounded="lg"
                          bgColor="tailwindGray.400"
                        >
                          <NextImage
                            src="/image.svg"
                            title={media.title || media.name}
                            alt="image-icon ionicons ionicons-icon"
                            width="342"
                            height="513"
                            priority
                            className={styles.fallBackMediaImage}
                          />
                        </Box>
                      )}
                    </a>
                  </NextLink>
                </Box>
              );
            })}
        </Box>
      </Box>
    )}
  </>
);

export default KnownFor;
