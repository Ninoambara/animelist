"use client";

import YoutubePlayer from "@/components/Utilities/YoutubePlayer";
import Image from "next/image";
import { useState } from "react";

const Page = async ({ params }) => {
  const [showModal, setShowModal] = useState(false);
  const [play, setPlay] = useState(false);
  const { id } = params;

  const playVideo = () => {
    console.log("tertekan");
    setPlay(true);
  };

  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  const anime = await response.json();

  return (
    <>
      <div className="backdrop-blur-xl text-white md:mx-20 md:my-10 p-5">
        <h1 className="text-white font-bold text-md md:text-3xl flex justify-row">
          <p className="me-2 text-orange-400">
            <strong>|</strong>
          </p>
          {anime.data.title}{" "}
          <p className="ms-2 text-gray-200">({anime.data.year})</p>
        </h1>
        <div className=" flex flex-wrap md:flex-nowrap py-5 px-1 md:gap-10 ">
          <Image
            className="rounded-lg"
            width={400}
            height={400}
            src={anime.data.images.webp.image_url}
          />
          <div className="flex flex-col mt-3  ">
            <div className="flex gap-2  flex-wrap  ">
              <p className="border px-2 border-gray-500 rounded-md text-gray-500">
                {anime.data.rating}
              </p>
              <p className="border px-2 border-gray-500 rounded-md text-gray-500">
                {anime.data.duration}
              </p>
              <p className="border px-2 border-gray-500 rounded-md text-gray-500">
                {anime.data.episodes} Episodes
              </p>
              <p className="border px-2 border-gray-500 rounded-md text-gray-500">
                {anime.data.episodes} Episodes
              </p>
              <p className="border px-2 border-gray-500 rounded-md text-gray-500">
                {anime.data.episodes} Episodes
              </p>
              <p className="border px-2 border-gray-500 rounded-md text-gray-500">
                {anime.data.episodes} Episodes
              </p>
            </div>
            <p className="font-sm font-thin text-gray-500">
              {anime.data.synopsis}
            </p>
            <div className="flex mt-5">
              <button
                className="bg-orange-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Watch Trailer
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <YoutubePlayer
                            youtubeId={anime.data.trailer.youtube_id}
                          />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1> disini akan ada banyak sekali </h1>
      </div>
    </>
  );
};

export default Page;
