'DSA-Recursion'

'1. Counting Sheep'

const sheep = num => {
    if (num === 0) { 
        return console.log('All the sheep jumped!!')
    }
    console.log(num + ': Another sheep jumps over the fence')
    sheep(num - 1)
    }

//sheep(3)


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

// console.log(powerCalculator(10,2))
// console.log(powerCalculator(10,100))
//console.log(powerCalculator(10,-2))


'3. Reverse String'

const reverse = string => {
    return string == '' ? '' : reverse(string.substr(1)) + string.charAt(0)
}
//console.log(reverse('hello'))


'4. nth Triangular Number' + "is this right?"

const triangle = n => {
    if (n <= 1) {
        return n
    }
    return n + triangle(n - 1)
}
//console.log(triangle(10))


'5. String Splitter'

let splitter = (string, seperator) => {
    if (!string) 
        return ''
    
    let idx = string[0]

    if (idx === seperator)
        idx = ''

    return idx + splitter(string.slice(1), seperator)
}

//console.log(splitter('02/20/2020', '/'))


'6. Fibonacci'

const fibonacci = nth => {
    if (nth <= 1) {
        return 1
    }
    return fibonacci(nth - 1) + fibonacci(nth - 2)
}

// console.log(fibonacci(7))
// console.log(fibonacci(5))


'7. Factorial'

const factorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

// console.log(factorial(3))
// console.log(factorial(5))


'8. Find a way out of the maze'


'9. Find ALL the ways out of the maze'


'10. Anagrams'
let string1 = 'amazon'
let string2 = 'bananna'
let string3 = 'nozama'

function anagram(str1, str2) {

    return str1 === str1
}


'11. Organization Chart'

let f = {
    "Zuckerberg": {
        "Schroepfer": {
            "Bosworth": {
                "Steve": {},
                "Kyle": {},
                "Andra": {}
            },
            "Zhao": {
                "Richie": {},
                "Sofia": {},
                "Jen": {}
            }
        },
        "Schrage": {
            "VanDyck": {
                "Sabrina": {},
                "Michelle": {},
                "Josh": {}
            },
            "Swain": {
                "Blanch": {},
                "Tom": {},
                "Joe": {}
            }
        },
        "Sandberg": {
            "Goler": {
                "Eddie": {},
                "Julie": {},
                "Annie": {}
            },
            "Hernandez": {
                "Rowi": {},
                "Inga": {},
                "Morgan": {}
            },
            "Moissinac": {
                "Amy": {},
                "Chuck": {},
                "Vinni": {}
            },
            "Kelley": {
                "Eric": {},
                "Ana": {},
                "Wes": {}
            }
        }
    }
}

const organization = (people, space = 0) => {
    let tab = " ".repeat(space * 5)
    Object.keys(people).forEach(key => {
      console.log(tab + key);
      organization(people[key], space + 1)
    })
  }
  
//organization(f)


'12. Binary Representation'

const binary = number => {
    return number.toString(2)
}
//console.log(binary(25))
