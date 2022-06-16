function hasTargetSum(array, target) {
  // Write your algorithm here


const objectForNumbersThatMakeTarget = {};

for (const element of array) {
  const result = target - element;
  if (result in objectForNumbersThatMakeTarget) return true;
    objectForNumbersThatMakeTarget[element] = true;
}

return false;
}

/* 
  Write the Big O time complexity of your function here
  It is linear since each element in array will be checked. So it is O(n)
*/

/* 
  Add your pseudocode here

  loop over the array while subtracting every element from target and assigning it to the result. make the element key of the obbject created and true the value after returning true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
