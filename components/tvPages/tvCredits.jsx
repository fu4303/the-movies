import { useCredits } from "../hooks/swr";
import PeopleCards from "../mediaComponents/peopleCards";

const TvCredits = (props) => {
  const { data, isLoading, isError } = useCredits(props.tvId, "tv");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <PeopleCards data={data.cast} pId={props.tvId} />
    </>
  );
};

export default TvCredits;
