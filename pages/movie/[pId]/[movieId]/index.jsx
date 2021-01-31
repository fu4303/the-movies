import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const DetailsPage = dynamic(() =>
  import("../../../../components/moviePages/movieDetails")
);

import { useMediaDetails } from "../../../../components/hooks/swr";
import SEO from "../../../../components/shared/seo";

const MovieId = () => {
  const router = useRouter();
  const { pId } = router.query;
  const { movieId } = router.query;

  const { data, isLoading, isError } = useMediaDetails(movieId, "movie");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <SEO title={data.title} description={data.overview} />
      <Box color="white">
        <DetailsPage
          backdrop={data.backdrop_path}
          backBtnHref={`/movie/${pId}`}
          poster={data.poster_path}
          title={data.title}
          pId={pId}
          movieId={data.id}
          tagline={data.tagline}
          overview={data.overview}
          releaseDate={data.release_date}
          genres={data.genres}
          runtime={data.runtime}
          voteAverage={data.vote_average}
          spokenLanguages={data.spoken_languages}
        />
      </Box>
    </>
  );
};

export default MovieId;
