import ActorsCards from "../detailsPage/actorsCards";
import Trailer from "../detailsPage/trailer";
import Recommendations from "../detailsPage/recommendations";
import { MediaHeroSection } from "../detailsPage/heroSection";

const TVShowDetails = (props) => (
  <>
    <MediaHeroSection {...props} mediaType="tv" mediaId={props.tvShowId} />
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
