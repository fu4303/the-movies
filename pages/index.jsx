import { useRouter } from "next/router";

import config from "../config";
import { getTrending } from "../lib/trending";
import {
  MediaCards,
  PeopleCards as PersonCard,
} from "../components/mediaComponents/mediaCards";
import SEO from "../components/shared/seo";
import Container from "../components/shared/cardContainer";

const getTitle = (query) => {
  if (query === "movie") {
    return "Trending Movies";
  } else if (query === "tv") {
    return "Trending Tv Shows";
  } else if (query === "person") {
    return "Trending People";
  } else {
    return "Trending";
  }
};

const Home = ({ data }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <SEO title={getTitle(query.type)} description={config.description} />

      <Container title={getTitle(query.type)} isTrending>
        {query.type === "person" ? (
          <PersonCard data={data.results} pId="popular" />
        ) : (
          <MediaCards
            data={data.results}
            mediaType={query.type !== "all" && query.type}
            pId="popular"
          />
        )}
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      data: await getTrending(query.type, "day"),
    },
  };
};

export default Home;
