import { Box, Button } from "@chakra-ui/react";

const LoadMoreBtn = ({ onClick }) => (
  <>
    <Box display="flex" justifyContent="center" pb="1.25rem">
      <Button colorScheme="teal" _focus={{ outline: "none" }} onClick={onClick}>
        Load More
      </Button>
    </Box>
  </>
);

export default LoadMoreBtn;
