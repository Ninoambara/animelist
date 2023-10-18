import Image from "next/image";
import Animelist from "@/app/components/AnimeList";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/top/anime`);

  const anime = await response.json();

  return (
    <>
      <h1>hello</h1>
      <div className="box-border  grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 p-10">
        {anime.data.map((data, index) => {
          return (
            <div key={data.mal_id} className="shadow-md rounded-lg overflow-hidden">
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
