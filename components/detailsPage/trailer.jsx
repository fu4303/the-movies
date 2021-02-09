import { AspectRatio, Box } from "@chakra-ui/react";
import useSWR from "swr";

import { API_URL, API_KEY, fetcher, MAX_WIDTH } from "../../config";
import { SectionTitle } from "../helpers/sectionTitle";

const Trailer = ({ mediaType, mediaId, pId }) => {
  const { data, error } = useSWR(
    `${API_URL}${mediaType}/${mediaId}/videos?api_key=${API_KEY}&language=en-US`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const results = data.results[0];

  return (
    <>
      {data.results == "" ? (
        ""
      ) : (
        <Box
          as="section"
          id="trailer"
          maxW={MAX_WIDTH}
          mx="auto"
          px={[4, 8, 12, 16]}
        >
          <SectionTitle
            href={`/${mediaType}/${pId}/${mediaId}#trailer`}
            py="1rem"
          >
            Trailer
          </SectionTitle>

          <AspectRatio ratio="2" m={{ xl: "2rem" }}>
            <iframe
              src={`https://www.youtube.com/embed/${results.key}`}
              title={results.name}
              name={results.name}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </AspectRatio>
        </Box>
      )}
    </>
  );
};

export default Trailer;
