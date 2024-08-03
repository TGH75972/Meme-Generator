document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const memeImage = document.getElementById('memeImage');

    const memes = [
        'meme1.jpeg',
        'meme2.jpeg',
        'meme3.jpeg',
        'meme4.jpeg',
        'meme5.jpeg',
        'meme6.jpeg',
        'meme7.jpeg',
        'meme8.jpeg',
        'meme9.jpeg',
        'meme10.jpeg'
    ];

    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memes.length);
        return memes[randomIndex];
    }

    generateButton.addEventListener('click', () => {
        const randomMeme = getRandomMeme();
        memeImage.src = randomMeme;
    });
});
