const steps = 8;
const path = ["D", "D", "U", "U", "U", "U", "D", "D","D", "D", "U", "U", "U", "U", "D", "D"];

function countingValleys(steps, path) {
    let valleyCount = 0;
    let currentLevel = 0;

    for (const step of path) {
        if (step === "U") {
            currentLevel++;
            if (currentLevel === 0) {
                valleyCount++;
            }
        } else if (step === "D") {
            currentLevel--;
        }
    }

    return valleyCount;
}

console.log(countingValleys(steps, path)); //2
