import Producer from '@/observer-pattern/Producer.js'

describe('Producer', () => {
    let someone = new Producer()
    const showMessage = jest.fn(message => message)

    test('addListener', () => {
        someone.addListener(showMessage)
        expect(someone.listeners.length).toBe(1)
        expect(typeof someone.listeners[0]).toBe('function')
    })

    test('notify', () => {
        someone.notify('WTF')
        expect(showMessage).toBeCalled()
        expect(showMessage).toBeCalledWith('WTF')
    })

    test('removeListener', () => {
        someone.removeListener(showMessage)
        expect(someone.listeners.length).toBe(0)
    })
})