import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DetailsPage = dynamic(() =>
  import("../../../../components/personPages/personDetails")
);

import { useMediaDetails } from "../../../../components/hooks/swr";
import SEO from "../../../../components/shared/seo";

const PersonId = () => {
  const router = useRouter();
  const { personId } = router.query;

  const { data, isLoading, isError } = useMediaDetails(personId, "person");

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <SEO title={data.name} description={data.biography} />
      <Box color="white">
        <DetailsPage
          personId={personId}
          backBtnHref={`/person/popular`}
          profile={data.profile_path}
          name={data.name}
          birthday={data.birthday}
          placeOfBirth={data.place_of_birth}
          knownFor={data.known_for_department}
          gender={data.gender}
          biography={data.biography}
        />
      </Box>
    </>
  );
};

export default PersonId;
