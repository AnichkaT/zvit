function getProductDetails(productId, successCallback, errorCallback) {
    
    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Tablet", price: 300 },
    ];

    
    const product = products.find(p => p.id === productId);

    
    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Product with ID ${productId} not found.`);
    }
}

function successCallback(product) {
    console.log("Product details:", product);
}

function errorCallback(error) {
    console.error("Error:", error);
}




getProductDetails(2,successCallback, errorCallback);
getProductDetails(5,successCallback, errorCallback);







































































