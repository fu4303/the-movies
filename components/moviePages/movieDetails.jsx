import { MediaHeroSection } from "../detailsPage/heroSection";
import ActorsCards from "../detailsPage/actorsCards";
import Trailer from "../detailsPage/trailer";
import Recommendations from "../detailsPage/recommendations";

const MovieDetails = (props) => {
  const { movieId, pId } = props;

  return (
    <>
      <MediaHeroSection mediaType="movie" mediaId={movieId} {...props} />
      <ActorsCards
        mediaType="movie"
        title="Top Billed Cast"
        mediaId={movieId}
        pId={pId}
      />
      <Trailer mediaType="movie" mediaId={movieId} pId={pId} />
      <Recommendations mediaType="movie" mediaId={movieId} pId={pId} isMovie />
    </>
  );
};

export default MovieDetails;
