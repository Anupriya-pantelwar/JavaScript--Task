// Bill values Store in array
const bills = [22, 295, 176, 440,37, 10, 1100, 86, 52];

// Empty arrays for tips and totals
const tips = [];
const totals = [];

//Tip Calculation functon
function calcTip(bill) {
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

//Loop to calculate tips and Totals
for(let i =0; i < bills.length; i++)
{
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

//Bonus: function to calculate average of an array
function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++)
    {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log("Average Totals:", calcAverage(totals));