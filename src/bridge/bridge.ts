interface IRaincoat {
    show(): void
}

abstract class Raincoat implements IRaincoat {
    vender: Vender
    constructor(vender: Vender) {
        this.vender = vender
    }

    setVender(vender: Vender) {
        this.vender = vender
    }

    show() {
        console.log(`${this.info()}; ${this.vender.overview()}`)
    }
    abstract info(): string 
}

interface Vender {
    overview(): string
}

class AsianVender implements Vender {
    overview() {
        return 'Best Vender in Asia'
    }
}

class EuropeanVender implements Vender {
    overview() {
        return 'Awesome Vender in Europe'
    }
}

class BeastVender implements Vender {
    overview() {
        return 'A Vender full of muscles'
    }
}

class LargeRaincoat extends Raincoat {
    info(): string {
        return 'large size'
    }
}

class MediumRaincoat extends Raincoat {
    info(): string {
        return 'medium size'
    }
}

class SmallRaincoat extends Raincoat {
    info(): string {
        return 'small size'
    }
}
export function bridgeMain() {
    console.log('\nStarting bridge pattern:')
    const asianVender = new AsianVender()
    const europeanVender = new EuropeanVender()
    const beastVender = new BeastVender()

    let raincoat = new LargeRaincoat(asianVender)
    raincoat.show()
    
    raincoat.setVender(europeanVender)
    raincoat.show()

    raincoat.setVender(beastVender)
    raincoat.show()
}