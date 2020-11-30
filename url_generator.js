function urlGenerator() {
    let result = ''
    const numbersAndLetters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0 ; i < 5 ; i ++) {
        let letter = numbersAndLetters[Math.floor(Math.random() * numbersAndLetters.length)]
        result += letter
    }
    return result
}

module.exports = urlGenerator