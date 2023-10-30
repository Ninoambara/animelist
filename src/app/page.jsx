import Image from "next/image";
import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Banner from "@/components/Banner";
import { fetchData } from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await fetchData("top/anime", "limit=5");

  const topManga = await fetchData("top/manga", "limit=5");

  return (
    <>
      <Banner />
      <section>
        <Header title={"Top Anime"} toLink={"animes"} />
        <Animelist api={topAnime} />
      </section>

      <section>
        <Header title={"Top Manga"} toLink={"mangas"} />
        <Animelist api={topManga} />
      </section>
    </>
  );
}
