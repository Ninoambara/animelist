import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  const anime = await response.json();

  return (
    <div className="backdrop-blur-xl text-white md:mx-20 md:my-10 p-5">
      <h1 className="text-white font-bold text-3xl flex justify-row">
        <p className="me-2 text-orange-400">
          <strong>|</strong>
        </p>
        {anime.data.title}{" "}
        <p className="ms-2 text-gray-200">({anime.data.year})</p>
      </h1>
      <div className=" flex py-5 px-1 gap-10 ">
        <Image
          className="rounded-lg"
          width={400}
          height={400}
          src={anime.data.images.webp.image_url}
        />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="border px-2 border-gray-500 rounded-md text-gray-500">
              {anime.data.rating}
            </p>
            <p className="border px-2 border-gray-500 rounded-md text-gray-500">
              {anime.data.duration}
            </p>
          </div>
          <p className="font-sm font-thin">{anime.data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
