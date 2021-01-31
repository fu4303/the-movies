import { Box } from "@chakra-ui/react";
import { IMAGE_BASE_URL, BACKDROP_SIZE, MAX_WIDTH } from "../../config";

const Backdrop = ({ children, backdropPath, isMinHeightScreenFull }) => (
  <>
    <Box
      as="section"
      bgImage={`linear-gradient(to top, rgba(21,94,117,1) 0%, rgba(21,94,117,0) 100%), url(${`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH={isMinHeightScreenFull ? "100vh" : "50vh"}
      maxW={MAX_WIDTH}
      mx="auto"
      px={[4, 8, 12, 16]}
    >
      {children}
    </Box>
  </>
);

export default Backdrop;
