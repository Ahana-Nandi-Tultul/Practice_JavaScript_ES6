function monthlySavings(array, livingcost)
{
    if(!Array.isArray(array) || !isNaN(livingcost))
    {
        return "invalid input"
    }
    let totalTax = 0
    let totalEarning = 0
    for(let i = 0; i < array.length;  i++)
    {
        totalEarning += array[i]
        if(array[i] >= 3000)
        {
            let tax = array[i] * 0.20;
            totalTax += tax;
        }
    }

    let savings = totalEarning - (totalTax + livingcost)
    if(savings > 0)
    {
        return savings
    }
    else
    {
        return "Earn More"
    }
}

// let result = monthlySavings([1000, 2000, 3000], 5400)
// let result = monthlySavings([1000, 2000, 2500], 5000)
// let result = monthlySavings([900, 2700, 3400], 10000)
let result = monthlySavings(100, [900, 2700, 3400])
console.log(result)