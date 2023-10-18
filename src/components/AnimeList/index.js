import Image from "next/image";

const Animelist = ({ title, image }) => {
  return (
    <div className=" transition-all">
      <Image className="" src={`${image}`} width={350} height={350} alt="Pic" />
      <h4 className="p-4 text-center font-bold md:text-md text-sm ">{title}</h4>
    </div>
  );
};

export default Animelist;
