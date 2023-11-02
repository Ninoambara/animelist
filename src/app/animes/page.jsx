"use client";

import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import { fetchData } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetch = async () => {
    const data = await fetchData("anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetch();
  }, [page]);

  return (
    <>
      <section>
        <Header title={"All Anime"} />
        <Animelist api={topAnime} type={"anime"} />
        <Pagination
          setPage={setPage}
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
        />
      </section>
    </>
  );
}
