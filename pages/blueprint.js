import Layout from "../components/layout/Layout";

const BlueprintPage = () => {
  return (
    <div className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-32 font-semibold">
      This page is under construction
    </div>
  );
};

BlueprintPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlueprintPage;
