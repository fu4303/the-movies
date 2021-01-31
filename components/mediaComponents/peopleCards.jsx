import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
import PeopleCardInfo from "./peopleCardInfo";

import styles from "./styles/cards.module.css";

const PersonCards = (props) => (
  <>
    {props.data.map((person) => {
      const personURL = `/person/${props.pId}/${person.id}`;

      return (
        <Box
          bgColor="white"
          pos="relative"
          boxShadow="lg"
          rounded="lg"
          transitionDuration="250ms"
          my="5"
          maxW={{ base: "20rem", sm: "none" }}
          mx="auto"
          _hover={{ boxShadow: "xl" }}
          key={person.id}
        >
          <NextLink href={personURL}>
            <a>
              {person.profile_path ? (
                <NextImage
                  src={`${IMAGE_BASE_URL}${PROFILE_SIZE}${person.profile_path}`}
                  title={person.name}
                  alt={person.name}
                  width="300"
                  height="449"
                  priority
                  className={styles.mediaImage}
                />
              ) : (
                <Box roundedTop="lg" bgColor="tailwindGray.400">
                  <NextImage
                    src="/person-sharp.svg"
                    title={person.name}
                    alt="person-sharp-icon ionicons ionicons-icon"
                    width="300"
                    height="449"
                    priority
                    className={styles.fallBackMediaImage}
                  />
                </Box>
              )}
            </a>
          </NextLink>
          <PeopleCardInfo
            href={personURL}
            name={person.name}
            job={person.known_for_department}
          />
        </Box>
      );
    })}
  </>
);

export default PersonCards;
