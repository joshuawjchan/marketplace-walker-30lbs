"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import img_1 from "./assets/image1.png";
import img_2 from "./assets/image2.png";
import img_3 from "./assets/image3.png";
import img_4 from "./assets/image5.png";


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Please?",
      "Pretty, pretty please?",
      "What if I got you another Blahaj?",
      "Are you sure? :<",
      "There's no going back after this...",
      "I'm telling your mom.",
      "Telling Aaron now.",
      "Almost as heartbreaking as when I left.",
      "</3"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative -mt-16 flex h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Images */}
      <img
        src={img_1}
        className="pointer-events-none absolute w-40 sm:w-52 md:w-60 lg:w-72 opacity-30 top-10 left-5 transform rotate-[-20deg]"
      />
      <img
        src={img_2}
        className="pointer-events-none absolute w-40 sm:w-52 md:w-60 lg:w-72 opacity-30 top-28 right-10 transform rotate-[15deg]"
      />
      <img
        src={img_4}
        className="pointer-events-none absolute w-40 sm:w-52 md:w-60 lg:w-72 opacity-30 bottom-16 left-8 transform rotate-[-25deg]"
      />
      <img
        src={img_3}
        className="pointer-events-none absolute w-40 sm:w-52 md:w-60 lg:w-72 opacity-30 bottom-5 right-16 transform rotate-[20deg]"
      />

       {/* <imga
        src={image}
        className="absolute w-32 sm:w-48 md:w-56 lg:w-64 opacity-30 top-20 left-1/2 transform rotate-[-10deg]"
      /> */}

      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="w-40 sm:w-60 md:w-80"/>
          <p>Thank you sweet girl :&gt;</p> 
          <div className="my-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          
            <TypeAnimation
              sequence={["My lovely Valentine", 1000, "My lovely", 500, "My lovely Claire", 2000]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </>
      ) : (
        <>
          <img
            className="h-32 sm:h-48 md:h-56 lg:h-64"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl text-center">
            Marketplace
          </h1>
          <div className="flex flex-col sm:flex-row items-center">
            <button
              className="mr-0 sm:mr-4 mb-2 sm:mb-0 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
