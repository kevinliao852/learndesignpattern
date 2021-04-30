interface State {
    name: string
    handle(task: string): void
}

class StateContext {
    currentState = new SunnyState()

    constructor() {
        this.currentState
    }
    setState(state: State) {
        console.log(`Change from ${this.currentState.name} state to ${state.name} state.`)
        this.currentState = state
    }

    request(task: string) {
        console.log(`Current task is ${task} and current state is ${this.currentState.name}`)
        console.log('So I plan ...')
        this.currentState.handle(task)
    }
}

class SunnyState implements State {
    name = 'sunny'
    handle(task: string) {
        if (task === 'work') {
            console.log('Workout hard!')
        }
        if (task === 'rest') {
            console.log('Drink protein!')
        }
    }
}

class CloudyState implements State {
    name = 'cloudy'
    handle(task: string) {
        if (task === 'work') {
            console.log('Surfing hard!')
        }
        if (task === 'rest') {
            console.log('Go shopping!')
        } 
    }
}

class RainyState implements State {
    name = 'rainy'
    handle(task: string) {
        if (task==='work') {
            console.log('Coding hard!')
        }
        if (task === 'rest') {
            console.log('Sleeping!')
        }
    }
}

export function stateMain() {
    console.log('\nStarting state pattern:')
    const ctx: StateContext = new StateContext()
    const sunny = new SunnyState()
    const cloudy = new CloudyState()
    const rainy = new RainyState()

    let task: string = 'work'
    ctx.request(task)

    ctx.setState(cloudy)
    ctx.request(task)

    ctx.setState(rainy)
    ctx.request(task)

    task = 'rest'
    ctx.request(task)
}