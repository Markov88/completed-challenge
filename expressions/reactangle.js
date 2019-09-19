function solve (arr) {
    const width = +arr[0]
    const height = +arr[1]
    const area = width * height
    const perimeter = width * 2 + height * 2
    return console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2))

}
solve(['5', '5'])