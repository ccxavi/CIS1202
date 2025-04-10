function fetchStockData(){
    fetch("stocks.json")
        .then(response => {
            if (!response.ok){
                throw new Error("Failed to load user data");
            }
            return response.json();
        })
        .then(stocks => displayStockData(stocks))
        .catch(error => console.error("Error fetching users:" , error))
}

function displayStockData(stocks) {
    const tableBody = document.getElementById("stocks-tableBody");
    tableBody.innerHTML = '';

    stocks.forEach((stock, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${stock.symbol}</td>
            <td>${stock.price}</td>
            <td>${stock.change}</td>
        `;

        tableBody.appendChild(row);
    });
};