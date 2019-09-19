function solve (arr) {
    const num = +arr[0]

    if (num <= 1) return console.log(false)

    for (let i = 2; i < num / 2 + 1; i++) {
        if (num % i === 0) return console.log(false)
    }

    return console.log(true)
}

solve([123])