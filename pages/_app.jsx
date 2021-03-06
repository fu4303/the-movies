import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import { theme } from "../theme";
import SEO from "../next-seo.config";
import Layout from "../components/layout";

import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "../scss/index.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
