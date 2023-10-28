"use client";

import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/anime?page=${page}`
    );

    const data = await response.json();
    console.log(data);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <section>
        <Header title={"All Anime"} />
        <Animelist api={topAnime} />
        <Pagination
          setPage={setPage}
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
        />
      </section>
    </>
  );
}
