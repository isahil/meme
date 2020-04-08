import React, {useState, useEffect} from 'react'
import MemeComponent from '../src/memeComponent'
import ImgFlip from '../src/imgflip'

const MemeContainer = () => {
    const [image, setImage] = useState('http://i.imgflip.com/1bij.jpg')
    const [memeges, setMemeges] = useState([])
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    const roulleteClick = async () => {
        const random = await ImgFlip.randomMeme()
        setImage(random)
    }

    const memeClick = event => {
        const {src, id} = event.target
        setImage(src)
    }

    const handleChange = event => {
        const {name, value} = event.target
        if(name === 'topText') setTopText( () => value)
        else setBottomText( () => value)
    }

    const allMemeges = () => {
        return memeges.map((meme, i) => 
            <img 
            key={i} 
            id={meme.id} 
            className='image' 
            src={meme.url}
            onClick={memeClick}
            />
        )
    }

   useEffect(() => {
     (async () => setMemeges(await ImgFlip.memes()))()
   }, [])

    return (
        <MemeComponent 
        topText={topText} 
        bottomText={bottomText}
        image={image}
        roulleteClick={roulleteClick}
        handleChange={handleChange}
        memeges={allMemeges}
        />
     );
}
 
export default MemeContainer;