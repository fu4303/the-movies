import { Box, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import NextLink from "next/link";
import NextImage from "next/image";

import {
  IMAGE_BASE_URL,
  MEDIUM_BACKDROP_SIZE,
  API_URL,
  API_KEY,
  fetcher,
  MAX_WIDTH,
} from "../../config";

import styles from "./styles/recommendations.module.css";

const Recommendations = (props) => {
  const { mediaType, mediaId, isMovie } = props;

  const { data, error } = useSWR(
    `${API_URL}${mediaType}/${mediaId}/recommendations?api_key=${API_KEY}&language=en-US`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      {data.results == "" ? (
        <Box display="flex"></Box>
      ) : (
        <Box maxW={MAX_WIDTH} mx="auto" px={[4, 8, 12, 16]}>
          <Heading
            as="h1"
            pt="1rem"
            fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          >
            Recommendations
          </Heading>
          <Box className={styles.container}>
            {data.results.slice(0, 4).map((media) => {
              return (
                <Box
                  my="1rem"
                  boxShadow="lg"
                  transitionDuration="250ms"
                  _hover={{ boxShadow: "xl" }}
                  key={media.id}
                >
                  <NextLink href={`/${mediaType}/popular/${media.id}`}>
                    <a>
                      {media.backdrop_path ? (
                        <Box display="flex">
                          <NextImage
                            src={`${IMAGE_BASE_URL}${MEDIUM_BACKDROP_SIZE}${media.backdrop_path}`}
                            alt={isMovie ? media.title : media.name}
                            title={isMovie ? media.title : media.name}
                            height="216"
                            width="384"
                            priority
                            className={styles.mediaImage}
                          />
                        </Box>
                      ) : (
                        <Box
                          display="flex"
                          bgColor="tailwindGray.400"
                          className={styles.mediaImage}
                        >
                          <NextImage
                            src="/image.svg"
                            title={isMovie ? media.title : media.name}
                            alt="image-icon ionicons ionicons-icon"
                            height="216"
                            width="384"
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
};

export default Recommendations;
