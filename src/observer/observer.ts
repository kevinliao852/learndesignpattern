interface Observable {
    subscribe(observer: IObserver): void
    unsubscribe(observer: IObserver): void
    notify(msg: string): void
}

class Subject implements Observable {
    name: string
    observers: Array<Observer>
    constructor(name: string) {
        this.name = name
        this.observers = []
    }
    subscribe(observer: Observer) {
        this.observers.push(observer)
        console.log(`${observer.name} has subscribed ${this.name}.`)
    }

    unsubscribe(observer: Observer) {
        this.observers = this.observers.filter((ele) => ele.name !== observer.name)
        console.log(`${observer.name} has unsubscribed ${this.name}.`)
    }

    notify(msg: string) {
        console.log(`${this.name} published a message:`)
        this.observers.forEach(observer => {
            observer.notify(msg)
        });
    }
}


interface IObserver {
    notify(msg: string): void
}

class Observer implements IObserver {
    name: string
    constructor(name: string) {
        this.name = name
    }
    notify(msg: string) {
        console.log(`${this.name} got new information: ${msg}`)
    }
}

export function observerMain() {
    console.log('\nStartin observer pattern:')
    const bulletin = new Subject('bulletin')
    const alex = new Observer('alex')
    const bob = new Observer('bob')
    const mark = new Observer('mark')

    bulletin.subscribe(alex)
    bulletin.subscribe(bob)

    bulletin.notify('first message!')

    bulletin.unsubscribe(alex)
    bulletin.subscribe(mark)
    bulletin.notify('second message!')
}
