import React from "react";

const MemeComponent = ({
  topText,
  bottomText,
  image,
  handleChange,
  roulleteClick,
  memeges,
}) => {
  console.log(memeges);
  return (
    <div className="memeContainer">
      <div className="memeGenerator">
        <div className="meme">
          <img className="memege" src={image} />
          <h1 className="topText"> {topText} </h1>
          <h1 className="bottomText"> {bottomText} </h1>
        </div>

        <div className="generator">
          <input
            placeholder="top text"
            name="topText"
            value={topText}
            onChange={handleChange}
          />
          <input
            placeholder="bottom text"
            name="bottomText"
            value={bottomText}
            onChange={handleChange}
          />
          <button onClick={roulleteClick}> Meme roullete </button>
        </div>
      </div>
      <div className="memeCollage"> {memeges()} </div>
    </div>
  );
};

export default MemeComponent;