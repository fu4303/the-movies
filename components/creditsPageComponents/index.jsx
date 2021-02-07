import { useMediaDetails } from "../hooks/swr";
import { pageTitle } from "../helpers/pageTitle";
import Container from "../shared/cardContainer";
import SEO from "../shared/seo";

const CreditsPageHeader = (props) => {
  const { mediaId, mediaType, isMovie, children } = props;

  const { data, isLoading, isError } = useMediaDetails(mediaId, mediaType);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <SEO
        title={`${isMovie ? data.title : data.name} (Cast & Crew)`}
        description={data.overview}
      />
      <Container
        title={`${pageTitle(`${isMovie ? data.title : data.name} Cast`)}`}
      >
        {children}
      </Container>
    </>
  );
};

export default CreditsPageHeader;
