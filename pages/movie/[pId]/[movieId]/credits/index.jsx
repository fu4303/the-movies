import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const CreditsPage = dynamic(() =>
  import("../../../../../components/creditsPageComponents")
);
const PeopleCards = dynamic(() =>
  import("../../../../../components/mediaComponents/mediaCards").then(
    (mod) => mod.PeopleCards
  )
);

import { useCredits } from "../../../../../components/hooks/swr";

const Credits = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data, isLoading, isError } = useCredits(movieId, "movie");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <CreditsPage mediaId={movieId} mediaType="movie" isMovie>
        <PeopleCards data={data.cast} pId={movieId} isCreditsPage />
      </CreditsPage>
    </>
  );
};

export default Credits;
