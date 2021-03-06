 export class Emitter {
    constructor() {
        this.listeners = {}
    }

    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
         this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] = 
            this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

// const emitter = new Emitter()

// emitter.subscribe('cat', data => console.log('Sub:', data))

// emitter.emit('cat', 42)

// setTimeout(() => {
//     emitter.emit('cat', 'After 4 seconds')
// }, 4000)

// setTimeout(() => {
//     emitter.emit('cat', 'After 6 seconds')
// }, 6000)