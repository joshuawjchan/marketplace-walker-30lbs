"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import img_1 from "./assets/img_1.jpg";
import img_2 from "./assets/img_2.png";
import img_3 from "./assets/img_3.png";
import img_4 from "./assets/img_4.jpg";


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
      ":( Are you sure?",
      "Pretty please, chicken feet?",
      "PLEASE?",
      "Say no and lose all ur gym progress.",
      "Ur willing to lose all your gains than to press yes?",
      "But cash will die if you say no..",
      "??? You really would let cash die?",
      "I might as well join cash in death",
      "ok ur talking to rex's ghost",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative -mt-16 flex h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Images */}
      <img
        src={img_1}
        className="pointer-events-none absolute w-32 sm:w-48 md:w-56 lg:w-64 opacity-30 top-20 left-10 transform rotate-[-20deg]"
      />
      <img
        src={img_2}
        className="pointer-events-none absolute w-32 sm:w-48 md:w-56 lg:w-64 opacity-30 top-20 right-20 transform rotate-[15deg]"
      />
      <img
        src={img_3}
        className="pointer-events-none absolute w-32 sm:w-48 md:w-56 lg:w-64 opacity-30 bottom-10 left-20 transform rotate-[-25deg]"
      />
      <img
        src={img_4}
        className="pointer-events-none absolute w-32 sm:w-48 md:w-56 lg:w-64 opacity-30 bottom-10 right-20 transform rotate-[20deg]"
      />

       {/* <imga
        src={image}
        className="absolute w-32 sm:w-48 md:w-56 lg:w-64 opacity-30 top-20 left-1/2 transform rotate-[-10deg]"
      /> */}

      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="w-40 sm:w-60 md:w-80"/>
          <p>Thank you for putting up with my BS :)</p> 
          <div className="my-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          
            <TypeAnimation
              sequence={["Yayyyy Valerie", 1000, "Yayyyy Valentine", 1000]}
              wrapper="span"
              speed={1}
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
            Will you be my Valentine on February 14, 2025?
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
