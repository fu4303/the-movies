import { useRouter } from "next/router";

import { PeopleCards } from "../../../../../components/mediaComponents/mediaCards";
import { useCredits } from "../../../../../components/hooks/swr";
import CreditsPage from "../../../../../components/creditsPageComponents";

const Credits = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data, isLoading, isError } = useCredits(movieId, "movie");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <CreditsPage mediaId={movieId} mediaType="movie">
        <PeopleCards data={data.cast} pId={movieId} isCreditsPage />
      </CreditsPage>
    </>
  );
};

export default Credits;
