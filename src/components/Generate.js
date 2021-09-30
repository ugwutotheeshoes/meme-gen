import React, { useState } from 'react';
import memes from './data'
import { Image, Transformation, CloudinaryContext} from 'cloudinary-react';

const Generate = () => {
  const [index, setIndex] = useState(0);
  const {title, img} = memes[index];

  const checkNumber = (number) => {
    if (number > memes.length - 1){
      return 0
    }
    if (number < 0){
      return memes.length - 1
    }
    return number;
  }
  const randomMeme = () =>{
    let randomMeme = Math.floor(Math.random() * memes.length);
    if(randomMeme === index){
      randomMeme = index + 1;
    }
    setIndex(checkNumber(randomMeme));
  }

  return (
  <article >
    <div >
    <CloudinaryContext cloudName="ugwutotheeshoes">
            <Image publicId= {img} alt={title} className="meme">
                <Transformation effect="sharpen" gravity="auto" crop="fill" />
            </Image>
        </CloudinaryContext>
    </div>
    <div className="review">
      <button className="randombtn" onClick={randomMeme}>
        Generate Random Meme
      </button>
    </div>
    </article>);
};

export default Generate
