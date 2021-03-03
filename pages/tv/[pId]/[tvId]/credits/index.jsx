import { useRouter } from "next/router";

import { PeopleCards } from "../../../../../components/mediaComponents/mediaCards";
import { useCredits } from "../../../../../components/hooks/swr";
import CreditsPage from "../../../../../components/creditsPageComponents";

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
