function solve (arr) {
    const a = +arr[0]
    const b = +arr[1]
    const c = +arr[2]
    const d = (b * b - 4 * a * c)
    if (a !== 0 && d >= 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a)
        const x2 = (-b - Math.sqrt(d)) / (2 * a)
        if (x1 === x2) {
            return console.log('x1=x2= ' + x1.toFixed(2))
        }
        return console.log('x1= ' + x1.toFixed(2) + '; x2= ' + x2.toFixed(2))
    }
    return console.log('no real roots')
}
solve(['-0.5', '4', '-8'])