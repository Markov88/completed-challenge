function solve (arr) {
    const newArr = arr.map(Number)
    if (newArr.forEach(e => e >= -10000 && e <= 10000)) {
        const min = newArr.sort((a, b) => a - b)
        const max = newArr.sort((a, b) => b - a)
        const sum = newArr.reduce((acc, cur) => acc + cur, 0)
        const avg = sum / arr.length
        if (min >= -1 && min <= 1000 && sum >= -1 && sum <= 1000)) {
            console.log('min=' + min[0].toFixed(2))
            console.log('max=' + max[0].toFixed(2))
            console.log('sum=' + sum.toFixed(2))
            console.log('avg=' + avg.toFixed(2))
        }

    }
}

solve(['2', '5', '1'])