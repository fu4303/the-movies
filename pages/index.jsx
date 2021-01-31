import config from "../config";
import SEO from "../components/shared/seo";

const Home = () => {
  return (
    <>
      <SEO title="Home" description={config.description} />
    </>
  );
};

export default Home;
