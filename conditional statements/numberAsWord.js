function solve (arr) {
    let number = arr[0]
    let newArr = []

    const objZeroToNineteen = {
        0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
        6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
        16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
    }
    const objTwentyToNinety = {
        20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",
        60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
    }

    const zeroToNineteen = Object.values(objZeroToNineteen)
    const twentyToNinety = Object.values(objTwentyToNinety)

    for (let i = 0; i < number.length; i++) {
        newArr.push(+number[i])
    }

    const toHundret = newArr.slice(0, 1)
    const toNinety = newArr.slice(1, 2)
    const toNine = newArr.slice(2, 3)
    const toNineteen = (newArr.slice(1, 3).join(''))

    if (number.length <= 2) {
        if (+number < 20) {
            return console.log(zeroToNineteen[number])
        } else if (toNinety == 0) {
            console.log(twentyToNinety[toHundret - 2])
        } else {
            console.log(twentyToNinety[toHundret - 2] + ' ' + zeroToNineteen[toNinety])
        }
    }

    if (number.length === 3) {
        if (toNineteen == 0) {
            console.log(zeroToNineteen[toHundret] + ' hundret ')
        }
        else if (toNineteen < 20 && toNineteen >= 10) {
            console.log(zeroToNineteen[toHundret] + ' hundret ' + 'and ' + zeroToNineteen[toNineteen])
        } else if (toNineteen < 10) {
            console.log(zeroToNineteen[toHundret] + ' hundret ' + 'and ' + zeroToNineteen[toNine])
        } else {
            if (toNine == 0) {
                console.log(zeroToNineteen[toHundret] + ' hundret ' + 'and ' + objTwentyToNinety[toNineteen])
            } else {
                console.log(zeroToNineteen[toHundret] + ' hundret ' + twentyToNinety[toNinety - 2] + ' ' + zeroToNineteen[toNine])
            }
        }
    }
}

solve(['123'])