function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    const c = +arr[2]
    if (a > b && a > c) {
        if (b > c) {
            return console.log(a, b, c)
        }
        return console.log(a, c, b)
    } else if (b > a && b > c) {
        if (a > c) {
            return console.log(b, a, c)
        }
        return console.log(b, c, a)
    } else if (b > a) {
        return console.log(c, b, a)
    }
    return console.log(c, a, b)
}
solve(['-2', '4', '3'])