const ImgFlip = {

    async memes() {
        const request = await fetch('https://api.imgflip.com/get_memes')
        const json = await request.json()
        return json.data.memes
    },

    async randomMeme() {
    const meme = await ImgFlip.memes()
    return meme[Math.floor(Math.random() * meme.length)].url    
    }


}
 
export default ImgFlip;