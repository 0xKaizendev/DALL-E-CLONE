import React from "react";
import { BsDownload } from "../index.js";
import { downloadImage } from "../utils";
import profile from "../assets/placeholder.png";
const ImageCard = ({ _id, name, prompt, image }) => {
  return (
    <div className="rounded-xl group relative shadow-xl hover:shadow-2xl  card">
      <img
        src={image}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl "
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 right-0 bg-primary opacity-90 m-2 p-4 rounded-md left-0">
        <p className="text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="flex items-center justify-between gap-2 object-cover mt-2">
          <div className="flex items-center gap-3">
            <div className="font-bold h-7 w-7 rounded-full bg-green-700 flex items-center justify-center uppercase">
              {name[0]}
            </div>
            <p>{name}</p>
          </div>
          <BsDownload className="h-5 w-5 hover:scale-105 cursor-pointer" onClick={()=>downloadImage(_id,image)} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
