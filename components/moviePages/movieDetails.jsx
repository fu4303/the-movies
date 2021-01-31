import { MediaHeroSection } from "../detailsPage/heroSection";
import ActorsCards from "../detailsPage/actorsCards";
import Trailer from "../detailsPage/trailer";
import Recommendations from "../detailsPage/recommendations";

const MovieDetails = (props) => (
  <>
    <MediaHeroSection {...props} mediaType="movie" mediaId={props.movieId} />
    <ActorsCards
      mediaType="movie"
      title="Top Billed Cast"
      mediaId={props.movieId}
      pId={props.pId}
    />
    <Trailer mediaType="movie" mediaId={props.movieId} />
    <Recommendations mediaType="movie" mediaId={props.movieId} isMovie />
  </>
);

export default MovieDetails;
