//Scores
let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;

//Determine the winner
if(dolphinsAvg > koalasAvg)
{
    console.log("Dolphins win the trophy!");
}else if(koalasAvg > dolphinsAvg){
   console.log("koalasAvg win the trophy!") ;
}else{
    console.log("Both win the trophy!");
}
