function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    const c = +arr[2]
    if (a > b && a > c) {
        return console.log(a)
    } else if (b > a && b > c) {
        return console.log(b)
    }
    return console.log(c)
}
solve(['-0.1', '-0.5', '-1.1'])