import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative h-[55vh]">
      <Image alt="NFTs" src="/props/nfts.png" fill={true} />
    </div>
  );
};

export default Carousel;
