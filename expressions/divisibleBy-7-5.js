function solve (num) {
    if (+num % 5 === 0 && +num % 7 === 0) {
        return console.log('true ' + num)
    }
    return console.log('false ' + num)
}

solve(['35'])