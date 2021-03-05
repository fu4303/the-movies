import { Box, chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, PROFILE_SIZE, MAX_WIDTH } from "../../config";
import { useCredits } from "../hooks/swr";
import { SectionTitle } from "../UI/sectionTitle";

const ActorsCards = (props) => {
  const { mediaId, mediaType, title, pId } = props;

  const { data, isLoading, isError } = useCredits(mediaId, mediaType);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      {data.cast == "" ? (
        ""
      ) : (
        <Box
          as="section"
          id="series_cast"
          maxW={MAX_WIDTH}
          mx="auto"
          px={[4, 8, 12, 16]}
        >
          <SectionTitle
            href={`/${mediaType}/${pId}/${mediaId}#series_cast`}
            pt="1rem"
          >
            {title}
          </SectionTitle>

          <NextLink href={`/${mediaType}/${pId}/${mediaId}/credits`}>
            <chakra.a
              href={`/${mediaType}/${pId}/${mediaId}/credits`}
              fontWeight="300"
            >
              Full Cast &#38; Crew
            </chakra.a>
          </NextLink>

          <Box className="mediaContainer">
            {data.cast.slice(0, 6).map((person) => {
              return (
                <Box
                  my="1rem"
                  boxShadow="lg"
                  transitionDuration="250ms"
                  _hover={{ boxShadow: "xl" }}
                  key={person.id}
                >
                  <NextLink href={`/person/popular/${person.id}`}>
                    <a aria-label={person.name}>
                      {person.profile_path ? (
                        <Box display="flex">
                          <NextImage
                            src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`}
                            width={300}
                            height={450}
                            alt={person.name}
                            title={person.name}
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
                            src="/person-sharp.svg"
                            width={300}
                            height={450}
                            alt="person-sharp-icon ionicons ionicons-icon"
                            title={person.name}
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

export default ActorsCards;
