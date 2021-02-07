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
  const { tvId } = router.query;

  const { data, isLoading, isError } = useCredits(tvId, "tv");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <CreditsPage mediaId={tvId} mediaType="tv">
        <PeopleCards data={data.cast} pId={tvId} isCreditsPage />
      </CreditsPage>
    </>
  );
};

export default Credits;
