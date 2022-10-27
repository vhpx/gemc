import Layout from "../components/layout/Layout";

const AboutPage = () => {
  return <div>AboutPage</div>;
};

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
