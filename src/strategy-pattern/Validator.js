const strategies = {
    isNonEmpty(value) {
        return value !== ''
    },
    minLength(value, length) {
        return value.length <= length
    },
    isId(value) {
        const correspondingNumberTable = {
            'A': '10',
            'B': '11',
            'C': '12',
            'D': '13',
            'E': '14',
            'F': '15',
            'G': '16',
            'I': '34',
            'H': '17',
            'J': '18',
            'K': '19',
            'M': '21',
            'N': '22',
            'O': '35',
            'P': '23',
            'Q': '24',
            'T': '27',
            'U': '28',
            'V': '29',
            'W': '32',
            'X': '30',
            'Z': '33'
        }

        let firstAlphabet = value.slice(0, 1)
        let correspondingNumber = correspondingNumberTable[firstAlphabet]
        let firstNumber = value.slice(1, 2)
        if (!correspondingNumber && (firstNumber != 1 || firstNumber != 2)) return false

        let numbers = (correspondingNumber + value.slice(1, 10)).split('').map(str => parseInt(str))
        let sum = 0
        for (let i = 0; i < numbers.length; i++) {
            if (i == 0 || i == 10) sum += numbers[i]
            else {
                sum += numbers[i] * (10 - i)
            }
        }
        let confirm = sum % 10
        return confirm === 0
    }
}

class Strategy {
    constructor(fn, msg) {
        this.validate = fn
        this.errorMsg = msg
    }
}

class Validator {
    constructor() {
        this.cache = []
    }

    add(value, rules) {
        for (let rule of rules) {
            let strategyArr = rule.strategy.split(':')
            let errorMsg = rule.errorMsg
            let strategyType = strategyArr.shift()
            strategyArr.unshift(value)
            this.cache.push(
                new Strategy( // Keep errorMsg as a parameter to integrate i18n
                    function () { return strategies[strategyType].apply(null, strategyArr) },
                    errorMsg
                )
            )
        }
    }

    validate() {
        for (let strategy of this.cache) {
            let isValidated = strategy.validate()
            if (!isValidated) {
                return strategy.errorMsg
            }
        }
        return true
    }
}

export default Validator