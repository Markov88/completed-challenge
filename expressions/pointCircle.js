function solve (arr) {
    const x = +arr[0]
    const y = +arr[1]
    const radius = x * x + y * y
    if (x > -1000 && x < 1000 && y > -1000 && y < 1000) {
        if (radius > 4) {
            return console.log('no ' + Math.sqrt(radius).toFixed(2))
        }
        return console.log('yes ' + Math.sqrt(radius).toFixed(2))
    }
    return console.log('x and y must be in a range (-1000, 1000)');
}

solve(['-1.5', '-1.5'])