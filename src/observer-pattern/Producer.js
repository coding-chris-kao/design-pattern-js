export default class Producer {
    constructor() {
        this.listeners = []
    }

    addListener(listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener)
        } else {
            throw new Error('listener have to be a function')
        }
    }

    removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1)
    }

    notify(message) {
        this.listeners.forEach(listener => listener(message))
    }
}
