DSA-Recursion

'1. Counting Sheep'

const sheep = num => {
    if (num === 0) { 
        return console.log('All the sheep jumped!!')
    }
    console.log(num + ': Another sheep jumps over the fence')
    sheep(num - 1)
    }

sheep(3)


'2. Power Calculator' 

const powerCalculator = (base, exponent) => {
    if (exponent < 0 ) {
        return 'exponent should be >= 0'
    }
    if (exponent === 0) {
        return 1
    }
    return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10,2))
console.log(powerCalculator(10,100))
console.log(powerCalculator(10,-2))


'3. Reverse String'

const reverse = string => {
    return string == '' ? '' : reverse(string.substr(1)) + string.charAt(0)
}
console.log(reverse('hello'))


'4. nth Triangular Number' + "is this right?"

const triangle = n => {
    if (n <= 1) {
        return n
    }
    return n + triangle(n - 1)
}
console.log(triangle(10))


'5. String Splitter'

const splitter = string => {
    return
}


'6. Fibonacci'

const fibonacci = nth => {
    if (nth < 2) {
        return 1
    }
    return fibonacci(nth - 1) + fibonacci(nth - 2)
}

console.log(fibonacci(7))
console.log(fibonacci(5))


'7. Factorial'

const factorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(3))
console.log(factorial(5))


'8. Find a way out of the maze'



