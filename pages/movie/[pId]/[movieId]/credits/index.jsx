import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const MovieCredits = dynamic(() =>
  import("../../../../../components/moviePages/movieCredits")
);

import CreditsPage from "../../../../../components/creditsPageComponents";

const Credits = () => {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <>
      <CreditsPage mediaId={movieId} mediaType="movie" isMovie>
        <MovieCredits movieId={movieId} />
      </CreditsPage>
    </>
  );
};

export default Credits;
