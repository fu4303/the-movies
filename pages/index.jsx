import { useRouter } from "next/router";

import { getTrending } from "../lib/trending";
import {
  MediaCards,
  PeopleCards as PersonCard,
} from "../components/mediaComponents/mediaCards";
import config from "../config";
import Container from "../components/shared/cardContainer";
import { NextSeo } from "next-seo";

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

  const title = `${getTitle(query.type)} - ${config.title}`;
  const description = "Get the latest Movies, Tv shows, and People.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={config.canonical}
        openGraph={{
          title,
          description,
        }}
      />

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
