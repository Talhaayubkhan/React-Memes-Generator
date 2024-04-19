import React from "react";
import navLogo from "./images/troll-face.png";

function Header() {
  return (
    <>
      <header className="flex items-center bg-blue-500 text-black p-5">
        <img src={navLogo} className="h-10 mr-3" alt="Logo" />
        <h2 className="text-3xl font-bold">Meme Generator</h2>
        <h4 className="text-xl ml-auto font-bold">React Project 3</h4>
      </header>
    </>
  );
}

export default Header;
