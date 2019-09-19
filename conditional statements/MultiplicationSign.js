function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    const c = +arr[2]
    const result = a * b * c
    if (result < 0) {
        return console.log('-')
    } else if (result > 0) {
        console.log('-')
    }
    return console.log('0')
}
solve(['-2', '4', '3'])