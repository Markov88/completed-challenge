function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    const h = +arr[2]
    const area = h * (a + b) / 2
    if (a > -500 && a < 500 && b > -500 && b < 500 && h > -500 && h < 500) {
        return console.log(area.toFixed(7))
    }
    return console.log('parameters should be in a range (-500:500)')
}

solve(['0.222', '0.333', '0.555'])