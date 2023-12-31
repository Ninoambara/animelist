"use client";

import { ChatCircleDots, Eye } from "@phosphor-icons/react";
import Image from "next/image";
import Comment from "./Comment";
import Viewer from "./Viewer";
import Episode from "./Episode";
import Notfound from "../Notfound";
import Link from "next/link";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

const Animelist = ({ api, type }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!api.data || api.data?.length === 0) {
    return <Notfound />;
  }

  return (
    <div className="box-border grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 md:px-20 px-5 py-5">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/detail/${type}/${anime.mal_id}`}
            key={anime.mal_id}
            className="bg-slate-400 rounded-lg overflow-hidden"
          >
            <div className="relative group transition-all">
              <div className="relative">
                <Episode />
                <Image
                  className="object-cover img-list"
                  src={anime.images.webp.image_url}
                  width={350}
                  height={350}
                  alt="Pic"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between  text-white text-sm font-thin">
                  <Comment />
                  <Viewer viewer={anime.members} />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity flex justify-center items-center">
                  <h4 className="text-white text-center font-bold md:text-md text-sm p-4">
                    {anime.title}
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Animelist;
