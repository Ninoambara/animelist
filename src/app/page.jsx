import Image from "next/image";
import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Banner from "@/components/Banner";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/top/anime?limit=5`
  );

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/top/manga?limit=5`
  );

  const topAnime = await response.json();
  const topManga = await result.json();

  return (
    <>
      <Banner />
      <section>
        <Header title={"Top Anime"} toLink={"animes"}/>
        <Animelist api={topAnime} />
      </section>

      <section>
        <Header title={"Top Manga"} toLink={"mangas"}/>
        <Animelist api={topManga} />
      </section>
    </>
  );
}
