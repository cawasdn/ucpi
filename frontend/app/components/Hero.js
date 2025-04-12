import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-cover relative">
        <Image src="/images/hero.jpg" fill={true} alt="ucpi" />
        {/* <img src="/images/hero.jpg" alt="" /> */}
        <div className="absolute h-full w-full bg-slate-900 opacity-30 z-2 "></div>
      </div>
    </>
  );
};

export default Hero;
