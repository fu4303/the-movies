import { MediaHeroSection } from "../detailsPage/heroSection";
import ActorsCards from "../detailsPage/actorsCards";
import Trailer from "../detailsPage/trailer";
import Recommendations from "../detailsPage/recommendations";

const TVShowDetails = (props) => {
  const { tvShowId, pId } = props;

  return (
    <>
      <MediaHeroSection mediaType="tv" mediaId={tvShowId} {...props} />
      <ActorsCards
        mediaType="tv"
        title="Series Cast"
        mediaId={tvShowId}
        pId={pId}
      />
      <Trailer mediaType="tv" mediaId={tvShowId} pId={pId} />
      <Recommendations mediaType="tv" mediaId={tvShowId} pId={pId} />
    </>
  );
};

export default TVShowDetails;
