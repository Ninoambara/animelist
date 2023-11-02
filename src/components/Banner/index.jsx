"use client";

import { useState } from "react";
import Image from "next/image";
import { SkipBack, SkipForward } from "@phosphor-icons/react";

const Banner = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://wallpaperaccess.com/full/39043.jpg"
  );

  const handleImageChange = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="md:mx-32 relative md:py-10 rounded-lg overflow-hidden">
      <div className="flex ">
        <Image
          className="object-cover banner"
          src={selectedImage}
          width={1000}
          height={1000}
          alt="Pic"
        />
      </div>
      <div className="absolute text-white flex justify-between items-center inset-0">
        <button
          className="bg-[#0b0b2a] py-10 rounded-e-lg px-1 hover:opacity-95"
          onClick={() =>
            handleImageChange("https://wallpaperaccess.com/full/39043.jpg")
          }
        >
          <SkipBack size={32} />
        </button>
        <button
          className="bg-[#0b0b2a] py-10 rounded-s-lg px-1 hover:opacity-95"
          onClick={() =>
            handleImageChange(
              "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
            )
          }
        >
          <SkipForward size={32} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
