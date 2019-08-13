import Validator from './Validator.js'

describe('Validator', () => {
    test('isId', () => {
        const validator1 = new Validator()
        validator1.add('F123456784', [
            {
                strategy: 'minLength:10',
                errorMsg: '名稱不能超過 10 位'
            },
            {
                strategy: 'isId',
                errorMsg: '身份證格式不正確'
            }
        ])
        expect(validator1.validate()).toBe(true)
    })

    test('minLength', () => {
        const validator2 = new Validator()
        validator2.add('MinLengthNameTest', [
            {
                strategy: 'minLength:6',
                errorMsg: '名稱不能超過 6 位'
            }
        ])
        expect(validator2.validate()).toBe('名稱不能超過 6 位')
    })

    test('isNonEmpty', () => {
        const validator3 = new Validator()
        validator3.add('', [
            {
                strategy: 'isNonEmpty',
                errorMsg: '名稱不能為空'
            }
        ])
        expect(validator3.validate()).toBe('名稱不能為空')
    })

})