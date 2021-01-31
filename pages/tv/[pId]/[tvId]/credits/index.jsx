import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const TvCredits = dynamic(() =>
  import("../../../../../components/tvPages/tvCredits")
);

import { useCredits } from "../../../../../components/hooks/swr";
import CreditsPageHeader from "../../../../../components/creditsPageComponents";

const Credits = () => {
  const router = useRouter();
  const { tvId } = router.query;

  const { data, isLoading, isError } = useCredits(tvId, "tv");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <CreditsPageHeader mediaId={tvId} mediaType="tv">
        <TvCredits tvId={tvId} />
      </CreditsPageHeader>
    </>
  );
};

export default Credits;
