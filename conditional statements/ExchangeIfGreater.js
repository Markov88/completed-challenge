function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    if (a < b) {
        return console.log(a + ' ' + b)
    }
    return console.log(b + ' ' + a)
}

solve(['5.5', '4.5'])