import { Box, chakra } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { IMAGE_BASE_URL, POSTER_SIZE, PROFILE_SIZE } from "../../config";
import { MediaInfoCard, PersonInfoCard } from "./infoCard";
import Backdrop from "./backdrop";

const BackBtn = ({ href }) => (
  <>
    <NextLink href={href}>
      <chakra.a
        href={href}
        bgColor="tailwindCyan.700"
        fontWeight="600"
        rounded="lg"
        px="8"
        py="2"
        style={{
          WebkitBoxShadow: "0px 0px 0px 4px rgba(8,145,178,0.5)",
          boxShadow: "0px 0px 0px 4px rgba(8,145,178,0.5)",
        }}
      >
        Back
      </chakra.a>
    </NextLink>
  </>
);

const Container = ({ backBtnHref, children }) => (
  <>
    <Box>
      <Box pt="1.5rem">
        <BackBtn href={backBtnHref} />
      </Box>

      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        py={{ base: "3rem", lg: "2rem" }}
      >
        {children}
      </Box>
    </Box>
  </>
);

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
          <Box
            className="heroSectionContainer"
            alignSelf="center"
            display={poster && "flex"}
            bgColor={!poster && "tailwindGray.400"}
            aria-label={`${title} Poster`}
          >
            {poster ? (
              <NextImage
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster}`}
                width={342}
                height={513}
                layout="fixed"
                alt={title}
                title={title}
                priority
                className="heroSectionPoster"
              />
            ) : (
              <NextImage
                src="/image.svg"
                width={342}
                height={513}
                layout="fixed"
                title={title}
                alt="image-icon ionicons ionicons-icon"
                className="fallBackMediaImage"
              />
            )}
          </Box>

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
          <Box
            className="heroSectionContainer"
            alignSelf="center"
            display={profile && "flex"}
            bgColor={!profile && "tailwindGray.400"}
            aria-label={`${name} Profile image`}
          >
            {profile ? (
              <NextImage
                src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${profile}`}
                width={300}
                height={450}
                layout="fixed"
                alt={name}
                title={name}
                priority
                className="heroSectionPoster"
              />
            ) : (
              <NextImage
                src="/person-sharp.svg"
                width={300}
                height={450}
                layout="fixed"
                alt="person-sharp-icon ionicons ionicons-icon"
                title={name}
                className="fallBackMediaImage"
              />
            )}
          </Box>

          <PersonInfoCard href={`/person/popular/${personId}`} {...props} />
        </Container>
      </Backdrop>
    </>
  );
};
