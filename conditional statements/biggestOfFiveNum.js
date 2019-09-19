function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    const c = +arr[2]
    const d = +arr[3]
    const e = +arr[4]

    if (a > b && a > c && a > d && a > e) {
        return console.log(a)
    } else if (b > a && b > c && b > d && b > e) {
        return console.log(b)
    } else if (c > a && c > b && c > d && c > e) {
        return console.log(c)
    } else if (d > a && d > b && d > c && d > e) {
        return console.log(d)
    } else {
        return console.log(e)
    }

}
solve(['-2', '4', '3', '2', '0'])