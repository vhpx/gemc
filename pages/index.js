import Button from "../components/common/Button";
import DiscordIcon from "../components/icons/DiscordIcon";
import InstagramIcon from "../components/icons/Instagram";
import InvertedDiscordIcon from "../components/icons/InvertedDiscordIcon";
import InvertedInstagramIcon from "../components/icons/InvertedInstagramIcon";
import InvertedTwitterIcon from "../components/icons/InvertedTwitterIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import Carousel from "../components/landing/Carousel";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center px-16 py-4">
        <div className="font-semibold text-3xl">GRAND ESCAPE MEMBERS CLUB</div>
        <div className="font-semibold text-black bg-[#ffe817] w-fit px-2 py-1 rounded">
          The new #1 Solana NFT Community
        </div>
      </div>

      <Carousel />

      <div className="px-16 mb-32">
        <div className="flex items-center justify-center py-8 gap-16 md:grid-cols-2">
          <Button label="Minting soon" />
          <Button label="Join our Discord" />
        </div>

        <div className="text-center">
          GEMC is a private members collective of 10,000 dedicated NFT&apos;s.
          Created by our famous artist! GEMC is doing Epic stuff for the NFT
          community.
          <br />
          <br />
          We are trying something different bringing Modern Digital Art to the
          NFT world.
        </div>

        <div className="mt-24 border-y py-12 flex gap-8">
          <div className="flex flex-col items-center">
            <InvertedTwitterIcon />
            <div className="mt-4 text-center">
              Join, Retweet and follow us on Twitter
            </div>
          </div>
          <div className="flex flex-col items-center">
            <InvertedDiscordIcon />
            <div className="mt-4 text-center">
              Join the Club and conversation on Discord today
            </div>
          </div>
          <div className="flex flex-col items-center">
            <InvertedInstagramIcon />
            <div className="-translate-y-1 mt-4 text-center">
              Follow us on Instagram and repost our mission
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout noPadding>{page}</Layout>;
};
