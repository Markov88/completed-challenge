function solve (arr) {
    if (+arr % 2 === 0) {
        return console.log('even ' + arr)
    }
    return console.log('odd ' + arr)
}
solve([0])