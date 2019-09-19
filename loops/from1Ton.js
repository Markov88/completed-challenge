function solve (arr) {
    const num = +arr[0]
    const newArr = []
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            newArr.push(i + 1)
        }
        console.log(newArr.join(' '))
    }
}

solve(['5'])