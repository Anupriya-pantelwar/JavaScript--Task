//Function to calculate the average of three scores.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test data 1
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

// Test data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

// Function to determine the winner
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolphins win (${avgDolphins} vs. ${avgKoalas})');
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('Koalas win (${avgKoalas} vs. ${avgDolphins})');
    } else {
        console.log("No team wins......");
    }
};

//Determine winners for both test datasets
checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins2, scoreKoalas2);