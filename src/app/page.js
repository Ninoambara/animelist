import Image from "next/image";
import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/top/anime?limit=5`
  );

  const topAnime = await response.json();

  return (
    <>
      <Header title={"Top Anime"} />
      <Animelist api={topAnime} />
    </>
  );
}
