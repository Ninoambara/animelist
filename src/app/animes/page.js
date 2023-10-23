import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/anime`);

  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header title={"All Top Anime"} />
        <Animelist api={topAnime} />
      </section>
    </>
  );
}
