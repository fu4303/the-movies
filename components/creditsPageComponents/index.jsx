import { useMediaDetails } from "../hooks/swr";
import { pageTitle } from "../helpers/pageTitle";
import Container from "../shared/cardContainer";
import SEO from "../shared/seo";

const CreditsPageHeader = (props) => {
  const { data, isLoading, isError } = useMediaDetails(
    props.mediaId,
    props.mediaType
  );

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <SEO
        title={`${props.isMovie ? data.title : data.name} (Cast & Crew)`}
        description={data.overview}
      />
      <Container
        title={`${pageTitle(`${props.isMovie ? data.title : data.name} Cast`)}`}
      >
        {props.children}
      </Container>
    </>
  );
};

export default CreditsPageHeader;
