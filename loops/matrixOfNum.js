    function solve (arr) {
    const num = +arr[0]
    if (num >= 1 && num <= 20) {
        for (let i = 1; i <= num; i++) {
            let result = ''
            for (let j = 1; j <= num; j++) {
                result += ' ' + (i + j - 1)
            }
            console.log(result)
        }
    }
}

solve(['3'])