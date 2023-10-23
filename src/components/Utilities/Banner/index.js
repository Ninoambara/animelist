import Image from "next/image";

const Banner = () => {
  return (
    <div className="md:px-24 md:py-10 rounded-lg overflow-hidden">
      <Image
        className="object-cover banner"
        src={"https://wallpaperaccess.com/full/39043.jpg"}
        width={1000}
        height={1000}
        alt="Pic"
      />
    </div>
  );
};

export default Banner;
