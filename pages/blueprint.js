import Layout from "../components/layout/Layout";

const BlueprintPage = () => {
  return <div>BlueprintPage</div>;
};

BlueprintPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlueprintPage;
