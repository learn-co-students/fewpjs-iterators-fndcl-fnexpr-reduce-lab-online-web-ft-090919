const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total}, 0)



// let doubledAndSummedFromTen = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 10)