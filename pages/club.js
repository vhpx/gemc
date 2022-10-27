import Layout from "../components/layout/Layout";

const ClubPage = () => {
  return <div>ClubPage</div>;
};

ClubPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ClubPage;
