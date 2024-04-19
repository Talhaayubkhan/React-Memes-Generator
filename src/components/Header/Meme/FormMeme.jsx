import { useEffect, useState } from "react";
// import memesData from "./memesData.js";
function FormMeme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    try {
      const getMemes = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setAllMemeImages(data.data.memes);
      };
      getMemes();
    } catch (error) {
      console.error(
        "Error Occur While Fetch the data from Api ",
        error.message
      );
    }
  }, []);

  // console.log(allMemeImages);

  function memeClick() {
    const memeRandomItem = Math.floor(Math.random() * allMemeImages.length);
    const randomUrl = allMemeImages[memeRandomItem].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomUrl,
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <>
      <main>
        <div className="form">
          <div>
            <label className="form-label">Top Text</label>
            <input
              type="text"
              placeholder="Enter First Text"
              className="form-input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label">Bottom Text</label>
            <input
              type="text"
              placeholder="Enter Second Text"
              className="form-input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button className="form-button" onClick={memeClick}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          {meme.randomImage && (
            <div className="form-image-container">
              <img src={meme.randomImage} alt="Meme" className="form-image" />
            </div>
          )}
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}

export default FormMeme;
