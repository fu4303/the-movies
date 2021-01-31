import { Box } from "@chakra-ui/react";
import BackBtn from "./backBtn";

const Container = ({ backBtnHref, children }) => (
  <>
    <Box>
      {backBtnHref && (
        <Box pt="1.5rem">
          <BackBtn href={backBtnHref} />
        </Box>
      )}
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

export default Container;
