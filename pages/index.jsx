import config, { API_KEY, API_URL, fetcher } from "../config";
import SEO from "../components/shared/seo";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { pageTitle } from "../components/helpers/pageTitle";

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
      <Container title={`${pageTitle("popualr")} Movies`}>
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

export const getServerSideProps = async () => {
  const movies = await fetcher(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      movies,
    },
  };
};

export default Home;
