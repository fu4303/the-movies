import useSWR from "swr";
import dynamic from "next/dynamic";

import config, { API_KEY, API_URL, fetcher } from "../config";
import { pageTitle } from "../components/helpers/pageTitle";
import { getMovies } from "../lib/movies";
import SEO from "../components/shared/seo";

const MovieCard = dynamic(() =>
  import("../components/mediaComponents/mediaCards").then(
    (mod) => mod.MediaCards
  )
);
const Container = dynamic(() => import("../components/shared/cardContainer"));

const Home = ({ movies }) => {
  const {
    data,
  } = useSWR(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetcher,
    { initialData: movies }
  );

  return (
    <>
      <SEO
        title={`${pageTitle("popular")} Movies`}
        description={config.description}
      />
      <Container title={`${pageTitle("popular")} Movies`}>
        <MovieCard
          data={data.results}
          mediaType="movie"
          pId="popular"
          isMovie
        />
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: { movies: await getMovies("popular", 1) },
    revalidate: 1,
  };
};

export default Home;
