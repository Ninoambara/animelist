import Image from "next/image";

const Animelist = ({ api }) => {
  return (
    <div className="box-border grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 md:px-20 px-5 py-5">
      {api.data.map((anime) => {
        return (
          <div
            key={anime.mal_id}
            className="bg-slate-400 rounded-lg overflow-hidden"
          >
            <div className="relative group transition-all">
              <div className="relative">
                <Image
                  className="object-cover img-list"
                  src={anime.images.webp.image_url}
                  width={350}
                  height={350}
                  alt="Pic"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity flex justify-center items-center">
                  <h4 className="text-white text-center font-bold md:text-md text-sm p-4">
                    {anime.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Animelist;
