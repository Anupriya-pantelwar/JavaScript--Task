//Function to calculate tip
function calcTip(bill) 
{
    if(bill >= 50 && bill <= 300)
    {
        return bill * 0.15;
    } else
    {
        return bill *0.2;
    }
}

//Test data
const bills = [125, 555, 44];

//calculate tips for each bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//Calculate total amounts
const totals = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//print result
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);