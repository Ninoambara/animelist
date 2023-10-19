import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/top/manga`);

  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header title={"All Top manga"}  />
        <Animelist api={topAnime} />
      </section>
    </>
  );
}
