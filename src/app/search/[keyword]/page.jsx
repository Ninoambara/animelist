import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/anime?q=${keyword}`
  );

  const searchAnime = await response.json();
  const decodeUri = decodeURIComponent(keyword);
  return (
    <>
      <Header title={`Search for ${decodeUri}`} />
      <Animelist api={searchAnime} type={"anime"} />
    </>
  );
};

export default page;
