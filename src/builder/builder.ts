class Director {
    builder: Builder
    constructor(builder: Builder) {
        this.builder = builder
    }

    build() {
        console.log("Start to build the mansion!")
        this.builder.buildGarden()
        this.builder.buildHouse()
        this.builder.buildSwimmingPool()
    }

}

interface Builder {
    buildGarden(): void
    buildHouse(): void
    buildSwimmingPool(): void
    getResult(): void
}

class AwesomeBuilder implements Builder {
    garden: string = ""
    house: string = ""
    swimmingPool: string = ""

    buildGarden() {
        this.garden = "Awesome Garden"
    }

    buildHouse() {
        this.house = "Awesome House"
    }


    buildSwimmingPool() {
        this.swimmingPool = "Awesome Swimming Pool"
    }

    getResult() {
        console.log("Enjoy the awesome result:")
        console.log(`${this.garden}, ${this.house} and ${this.swimmingPool}!`)
    }
}

export function builderMain() {

    console.log("\nStarting builder pattern:")
    const builder = new AwesomeBuilder()
    const director = new Director(builder)
    director.build()
    builder.getResult()
}