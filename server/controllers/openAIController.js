const {Configuration , OpenAIApi} = require('openai');
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const AI = new OpenAIApi(config);


const generateImage = async (req, res) => {
    const {prompt, size} = req.body;
    const sizeImage = parseSizeImage(size);
   try {
    const response = await AI.createImage({
        prompt,
        n: 1,
        size: sizeImage,
    })
    const imageUrl = response.data.data[0].url;
    res.status(200).json({
        status: true,
        data: imageUrl
    })
   }catch (error) {
        // make like documentations in openai
        if(error.response){
            console.log(error.response.status)
            console.log(error.response.data)
        }else {
            console.log(error.message)
        }
        res.status(400).json({
            status: false,
            message: error.message
            
        })
   }
}

const parseSizeImage = (size) => {
    switch (size) {
        case 'small':
            return '256x256'
        case 'medium':
            return '512x512'
        case 'large':
            return '1024x1024'
        default:
            return '256x256'
    }
}

module.exports = { generateImage }