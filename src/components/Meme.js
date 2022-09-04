import React from "react";
import memesData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url

    setMeme(preMeme => ({
      ...preMeme,
      randomImage: url
    }))
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Buttom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </div>
      <div>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}
