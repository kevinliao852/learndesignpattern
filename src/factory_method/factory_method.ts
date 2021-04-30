interface IFactory {
    getProduct(productType: string): Product;
}


export class Factory implements IFactory {
    getProduct(productType: string) {
        if (productType === 'productA') {
            return new ProductA()
        }

        if (productType === 'productB') {
            return new ProductB()
        }

        return new DefaultProduct()
    }


}

interface Product {
    info(): void
}

class DefaultProduct implements Product {
    info() {
        console.log('Info of Default Product')
    }
}

class ProductA implements Product {
    info() {
        console.log('Info of Product A')
    }
}

class ProductB implements Product {
    info() {
        console.log('Info of Product B')
    }
}

export function factoryMethodMain() {

    console.log('\nStarting factory method pattern:')
    const factory = new Factory();

    let productType: string = 'productA';
    let product = factory.getProduct(productType)

    product.info()

    productType = 'productB';
    product = factory.getProduct(productType)
    product.info()    
}
