import { Box } from "@chakra-ui/react";
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
import { SectionTitle } from "../helpers/sectionTitle";

const Recommendations = (props) => {
  const { mediaType, mediaId, pId } = props;

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
        <Box
          as="section"
          id="recommendations"
          maxW={MAX_WIDTH}
          mx="auto"
          px={[4, 8, 12, 16]}
        >
          <SectionTitle
            href={`/${mediaType}/${pId}/${mediaId}#recommendations`}
            pt="1rem"
          >
            Recommendations
          </SectionTitle>

          <Box className="recommendationsContainer">
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
                    <a aria-label={`${media.title || media.name} Backdrop`}>
                      {media.backdrop_path ? (
                        <Box display="flex">
                          <NextImage
                            src={`${IMAGE_BASE_URL}${MEDIUM_BACKDROP_SIZE}${media.backdrop_path}`}
                            width={384}
                            height={216}
                            alt={media.title || media.name}
                            title={media.title || media.name}
                            className="mediaImageFullRounded"
                          />
                        </Box>
                      ) : (
                        <Box
                          display="flex"
                          bgColor="tailwindGray.400"
                          className="mediaImageFullRounded"
                        >
                          <NextImage
                            src="/image.svg"
                            width={384}
                            height={216}
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

export default Recommendations;
