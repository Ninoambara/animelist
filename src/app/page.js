import Image from "next/image";
import Animelist from "@/components/AnimeList";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/top/anime?limit=10`
  );

  const anime = await response.json();

  return (
    <>
      <h1 className="text-center font-bold text-3xl underline  md:p-5 p-3">
        Top Anime
      </h1>
      <div className="box-border  grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 md:px-20 px-5 py-10">
        {anime.data.map((data, index) => {
          return (
            <div
              key={data.mal_id}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <Animelist
                title={data.title}
                image={data.images.webp.image_url}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
