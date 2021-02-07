import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Container = dynamic(() =>
  import("../../../components/shared/cardContainer")
);
const PersonCard = dynamic(() =>
  import("../../../components/mediaComponents/mediaCards").then(
    (mod) => mod.PeopleCards
  )
);
const LoadMoreBtn = dynamic(() =>
  import("../../../components/shared/loadMoreBtn")
);

import { useMedia } from "../../../components/hooks/swr";
import { pageTitle } from "../../../components/helpers/pageTitle";
import config from "../../../config";
import SEO from "../../../components/shared/seo";

const Page = ({ pId, index }) => {
  const { data, isLoading, isError } = useMedia(pId, "person", index);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      {index < data.total_pages && <PersonCard data={data.results} pId={pId} />}
    </>
  );
};

const Person = () => {
  const [cnt, setCnt] = useState(2);

  const router = useRouter();
  const { pId } = router.query;

  const handleClick = () => {
    setCnt(cnt + 1);
  };

  const pages = [];
  for (let i = 1; i < cnt; i++) {
    pages.push(<Page pId={pId} index={i} key={i} />);
  }

  return (
    <>
      {pId && (
        <>
          <SEO
            title={`${pageTitle(pId)} People`}
            description={config.description}
          />
          <Container title={`${pageTitle(pId)} People`}>{pages}</Container>
          <LoadMoreBtn onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default Person;
