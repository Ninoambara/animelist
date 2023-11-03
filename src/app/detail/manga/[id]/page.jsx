const Page = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);

  const anime = await response.json();

  return (
    <div className="backdrop-blur-xl bg-white/30  text-white md:mx-20 md:my-10 p-5">
      <h1 className="text-xl">{anime.data?.title}</h1>
      
    </div>
  );
};

export default Page;
