const getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

module.exports = {
    getRandomArbitrary
}