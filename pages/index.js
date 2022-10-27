import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="font-semibold text-3xl">GRAND ESCAPE MEMBERS CLUB</div>
        <div className="font-semibold text-black bg-[#ffe817] w-fit px-2 py-1 rounded">
          The new #1 Solana NFT Community
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
