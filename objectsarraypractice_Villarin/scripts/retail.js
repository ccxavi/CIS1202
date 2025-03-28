const products = [
    { 
        name: 'T-shirt', 
        category: 'Apparel',
        price: 399,
        stock: 10
    },
    { 
        name: 'Dress', 
        category: 'Apparel',
        price: 599,
        stock: 5
    },
    { 
        name: 'Sneakers', 
        category: 'Footwear',
        price: 1500,
        stock: 3
    },
    { 
        name: 'Sandals', 
        category: 'Footwear',
        price: 1299,
        stock: 7
    },
    { 
        name: 'Backpack', 
        category: 'Bags',
        price: 899,
        stock: 2
    },
    { 
        name: 'Handbag', 
        category: 'Bags',
        price: 700,
        stock: 4
    },
    { 
        name: 'Sunglasses', 
        category: 'Accessories',
        price: 2500,
        stock: 6
    },
    { 
        name: 'Watch', 
        category: 'Accessories',
        price: 5799,
        stock: 8
    },
];

function buyProduct(product, stocks){
    let curr_product = products.find(products => products.name.toLowerCase() === product.toLowerCase());

    if (!curr_product){
        console.log(`Product-${curr_product.name} not found.`)
    } else {
        if (curr_product.stock < stocks){
            console.log(`No stocks available for ${curr_product.name}`);
        } else {
            let inventoryBefore = totalInventory();
            curr_product.stock -= stocks;
            let inventoryAfter = totalInventory();

            console.log(`Buying ${stocks} ${product}(s)`)
            console.log("Stocks Left: " + curr_product.stock)
            console.log("Inventory Value Before Buying: " + inventoryBefore)
            console.log("Inventory Value After Buying: " + inventoryAfter)

        }
    }
}

function totalInventory(){
    return products.reduce((total, product) => total + (product.price * product.stock), 0);
}

buyProduct("Watch", 4);