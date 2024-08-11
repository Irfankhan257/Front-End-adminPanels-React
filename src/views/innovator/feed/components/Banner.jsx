import nft1 from "assets/img/nfts/4.jpg";

const Banner1 = () => {
  return (
    <div
      className="flex h-full w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1})` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Discover the most Innovative Ideas in the world
        </h4>
        <p className="mb-[40px] max-w-full text-lg  font-medium text-lightPrimary text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Enter in this creative and innovative world. Discover now the latest
          ideas or start creating your own. Just head over to the pitch an idea
          section, pitch your idea to the world and start Your own Business!
        </p>
      </div>
    </div>
  );
};

export default Banner1;
