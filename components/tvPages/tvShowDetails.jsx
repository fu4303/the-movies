import { MediaHeroSection } from "../detailsPage/heroSection";
import ActorsCards from "../detailsPage/actorsCards";
import Trailer from "../detailsPage/trailer";
import Recommendations from "../detailsPage/recommendations";

const TVShowDetails = (props) => (
  <>
    <MediaHeroSection mediaType="tv" mediaId={props.tvShowId} {...props} />
    <ActorsCards
      mediaType="tv"
      title="Series Cast"
      mediaId={props.tvShowId}
      pId={props.pId}
    />
    <Trailer mediaType="tv" mediaId={props.tvShowId} />
    <Recommendations mediaType="tv" mediaId={props.tvShowId} />
  </>
);

export default TVShowDetails;
