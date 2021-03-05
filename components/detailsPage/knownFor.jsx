import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, MAX_WIDTH, POSTER_SIZE } from "../../config";
import { SectionTitle } from "../UI/sectionTitle";

const KnownFor = (props) => {
  const { cast } = props.data;

  return (
    <>
      {cast == "" ? (
        ""
      ) : (
        <Box
          as="section"
          id="known_for"
          maxW={MAX_WIDTH}
          mx="auto"
          px={[4, 8, 12, 16]}
        >
          <SectionTitle
            href={`/person/popular/${props.personId}#known_for`}
            pt="1rem"
          >
            Known For
          </SectionTitle>

          <Box className="mediaContainer">
            {cast
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
                      <a aria-label={`${media.title || media.name} Poster`}>
                        {media.poster_path ? (
                          <Box display="flex">
                            <NextImage
                              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}
                              width={342}
                              height={513}
                              alt={media.title || media.name}
                              title={media.title || media.name}
                              className="mediaImageFullRounded"
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
                              width={342}
                              height={513}
                              alt="image-icon ionicons ionicons-icon"
                              title={media.title || media.name}
                              className="fallBackMediaImage"
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

export default KnownFor;
