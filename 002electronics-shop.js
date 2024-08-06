
function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1; //in case no options function should return -1

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const totalCost = keyboards[i] + drives[j];
            if (totalCost <= b && totalCost > maxSpent) {
                maxSpent = totalCost;
            }
        }
    }

    return maxSpent;
}