import { Box } from "@chakra-ui/react";
import NextHead from "next/head";

import Header from "../header";

const Layout = ({ children }) => (
  <>
    <NextHead>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        key="viewport"
      />
      <meta
        httpEquiv="Content-Type"
        content="text/html;charset=UTF-8"
        key="content_type"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </NextHead>
    <Box>
      <Header />
      <Box
        as="main"
        letterSpacing="0.4px"
        bgColor="tailwindCyan.800"
        minH="100vh"
      >
        {children}
      </Box>
    </Box>
  </>
);

export default Layout;
