"use client";

import Animelist from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import { fetchData } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [topManga, setTopManga] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTopManga = async () => {
    const data = await fetchData("manga", `page=${page}`);
    setTopManga(data);
  };

  useEffect(() => {
    fetchTopManga();
  }, [page]);

  return (
    <>
      <section>
        <Header title={"All Top manga"} />
        <Animelist api={topManga} type={"manga"} />
        <Pagination
          setPage={setPage}
          page={page}
          lastPage={topManga.pagination?.last_visible_page}
        />
      </section>
    </>
  );
}
