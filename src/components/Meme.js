import React from "react";
import memesData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((preMeme) => ({
      ...preMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value
      };
    });
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="topText"
          onChange={handleChange}
          name="topText"
        />
        <input
          type="text"
          placeholder="bottomText"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
