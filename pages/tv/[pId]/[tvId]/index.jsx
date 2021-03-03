import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useMediaDetails } from "../../../../components/hooks/swr";
import SEO from "../../../../components/shared/seo";
import DetailsPage from "../../../../components/tvPages/tvShowDetails";

const TvId = () => {
  const router = useRouter();
  const { pId } = router.query;
  const { tvId } = router.query;

  const { data, isLoading, isError } = useMediaDetails(tvId, "tv");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <SEO title={data.name} description={data.overview} />
      <Box color="white">
        <DetailsPage
          backdrop={data.backdrop_path}
          backBtnHref={`/tv/${pId}`}
          poster={data.poster_path}
          title={data.name}
          pId={pId}
          tvShowId={data.id}
          genres={data.genres}
          releaseDate={data.first_air_date}
          runtime={data.episode_run_time[0]}
          tagline={data.tagline}
          overview={data.overview}
          voteAverage={data.vote_average}
          spokenLanguages={data.spoken_languages}
        />
      </Box>
    </>
  );
};

export default TvId;
