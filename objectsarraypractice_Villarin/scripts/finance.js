let expensePerMonth = [
    {
        month: "January",
        rent: 3000,
        food: 1999,
        transportation: 500
    },
    {
        month: "February",
        rent: 3000,
        food: 1500,
        transportation: 750
    },
    {
        month: "March",
        rent: 3000,
        food: 2000,
        transportation: 600
    },
    {
        month: "April",
        rent: 3000,
        food: 1600,
        transportation: 700
    },
    {
        month: "May",
        rent: 3000,
        food: 1800,
        transportation: 650
    },
    {
        month: "June",
        rent: 3000,
        food: 1700,
        transportation: 700
    },
    {
        month: "July",
        rent: 3000,
        food: 1900,
        transportation: 600
    },
    {
        month: "August",
        rent: 3000,
        food: 2000,
        transportation: 650
    },
    {
        month: "September",
        rent: 3000,
        food: 1800,
        transportation: 700
    },
    {
        month: "October",
        rent: 3000,
        food: 1700,
        transportation: 750
    },
    {
        month: "November",
        rent: 3000,
        food: 1900,
        transportation: 600
    },
    {
        month: "December",
        rent: 3000,
        food: 2100,
        transportation: 650
    }
];

function calculateExpenseThisMonth(find_month) {
    let monthCalc = expensePerMonth.find(c_month => c_month.month.toLowerCase() === find_month.toLowerCase());

    if (!monthCalc) {
        console.log(`No expense data found for ${find_month}`);
        return;
    }

    let totalExp = monthCalc.rent + monthCalc.food + monthCalc.transportation;
    console.log(`Total Expenses for the month of ${find_month} is ${totalExp}`);
}

calculateExpenseThisMonth("July");