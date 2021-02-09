import { useCombinedCredits } from "../hooks/swr";
import { PersonHeroSection } from "../detailsPage/heroSection";
import KnownFor from "../detailsPage/knownFor";

const PersonDetails = (props) => {
  const { data, isLoading, isError } = useCombinedCredits(props.personId);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <PersonHeroSection data={data} {...props} />
      <KnownFor data={data} personId={props.personId} />
    </>
  );
};

export default PersonDetails;
