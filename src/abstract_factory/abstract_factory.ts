class AbstractFactory {
    getFactory(factoryType: string) {
        if (factoryType === "factory A") {
            return new FactoryA()
        } else {
            return new FactoryB()
        }
    }
}

interface IFactory {
    getProduct(productType: string): Product
}

interface Product {
    productInfo(): string
}

class ProductAFromFactoryA implements Product {
    productInfo() {
        return 'product A of factory A'
    }
}

class ProductBFromFactoryA implements Product {
    productInfo() {
        return 'product B of factory A'
    }
}

class ProductAFromFactoryB implements Product {
    productInfo() {
        return 'product A of factory B'
    }
}

class ProductBFromFactoryB implements Product {
    productInfo() {
        return 'product B of factory B'
    }
}

class FactoryA implements IFactory {
    getProduct(productType: string) {
        if (productType === 'product A') {
            return new ProductAFromFactoryA()
        } else {
            return new ProductBFromFactoryA()
        }

    }
}

class FactoryB implements IFactory {
    getProduct(productType: string) {
        if (productType === 'product A') {
            return new ProductAFromFactoryB()
        } else {
            return new ProductBFromFactoryB()
        }
    }
}


export function abstractFactoryMain() {

    console.log("\nStarting abstract factory pattern:")
    const abstractFactory = new AbstractFactory()

    let factoryType: string = "factory A"
    let factory = abstractFactory.getFactory(factoryType)

    let productType: string = "product A"
    let product = factory.getProduct(productType)
    console.log(product.productInfo())

    productType = "product B"
    product = factory.getProduct(productType)
    console.log(product.productInfo())

    factoryType = "factory B"
    factory = abstractFactory.getFactory(factoryType)

    product = factory.getProduct(productType)
    console.log(product.productInfo())

    productType = "product A"
    product = factory.getProduct(productType)
    console.log(product.productInfo())




}