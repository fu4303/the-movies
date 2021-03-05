import { useState } from "react";
import { useRouter } from "next/router";

import { MediaCards as MovieCard } from "../../../components/mediaComponents/mediaCards";
import { useMedia } from "../../../components/hooks/swr";
import { pageTitle } from "../../../components/helpers/pageTitle";
import config from "../../../config";
import SEO from "../../../components/shared/seo";
import Container from "../../../components/shared/cardContainer";
import LoadMoreBtn from "../../../components/shared/loadMoreBtn";

const Page = ({ pId, index }) => {
  const { data, isLoading, isError } = useMedia(pId, "movie", index);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      {index < data.total_pages && (
        <MovieCard data={data.results} mediaType="movie" pId={pId} />
      )}
    </>
  );
};

const Movie = () => {
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
            title={`${pageTitle(pId)} Movies`}
            description={config.description}
          />
          <Container title={`${pageTitle(pId)} Movies`}>{pages}</Container>
          <LoadMoreBtn onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default Movie;
