const jonas = [
    'Jonas', 
    'Schmedtmann',
     2037 - 1991, 
     'teacher', 
     ['peter', 'Steven','Michael'],
     true
];

//0, 1, 2, 3, 4......
//...4, 3, 2, 1, 0

for(let i= jonas.length - 1; i>=0; i--)
{
    console.log(i , jonas[i]);
}

//loop inside loop
for(let exercise = 1; exercise < 4; exercise++)
{
    console.log(`--------Starting exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep++)
    {
        console.log(`Lifting weight repetition ${rep}`);
    }
}