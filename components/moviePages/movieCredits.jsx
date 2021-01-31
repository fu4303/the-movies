import { useCredits } from "../hooks/swr";
import PeopleCards from "../mediaComponents/peopleCards";

const MovieCredits = (props) => {
  const { data, isLoading, isError } = useCredits(props.movieId, "movie");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <PeopleCards data={data.cast} pId={props.movieId} />
    </>
  );
};

export default MovieCredits;
