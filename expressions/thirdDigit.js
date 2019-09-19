function solve (arr) {
    arr = arr.toString()
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    newArr.reverse()
    if (newArr[2] === '7') {
        return console.log(true)
    }
    else if (newArr[2] === undefined) {
        return console.log(false + ' ' + 0)
    }
    return console.log(false + ' ' + newArr[2])
}

solve(['721'])
