// Task 1: Create an Array Containing Information About Different Products

let products = [
    { name: "Laptop", price: 999.99, description: "Apple Laptop" },
    { name: "Smartphone", price: 699.99, description: "Newest iPhone" },
    { name: "Headphones", price: 149.99, description: "Newest AirPods" }
];


// Task 2: Write a Function to Display the Product Information on the Webpage Dynamically

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        // Create a new div for each product
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Create and append the product name
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // Create and append the product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        // Create and append the product description
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        // Append the productDiv to the container
        productContainer.appendChild(productDiv);
    });
}


// Task 3: Implement an Event Listener to Trigger the Display of Products When the Page Loads

window.addEventListener('load', displayProducts);
