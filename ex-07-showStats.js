/**
 * Ex-07: showStats()
 *
 * Write a function called showStats() that takes a number and an array of numbers
 * it should return an object with 4 properties:
 *    1) count_inputEqualTo: the number of elements in the array that the input number is greater than
 *    2) count_inputGreaterThan: the number of elements in the array that the input is less than
 *    3) count_inputLessThan : the number of elements in the array that the input is equal to.
 *    4) setSize: the quantity of elements in the set (not including input, obvs.)
 *
 *  Ex:   showStats(3, [1,2,3,4,5,6,5,4,3,2,1])
 *          => {
 *                 count_inputEqualTo: 2,
 *	                count_inputGreaterThan: 4,
 *                 count_inputLessThan: 5,
 *                 setSize: 11
 *              }
**/

var showStats = function (inputNum, inputArray){
  var outputObj = {
    count_inputEqualTo: 0,
    count_inputGreaterThan: 0,
    count_inputLessThan: 0,
    setSize: 0
  }

  varQuantity = 0;

  for (var i = 0; i < inputArray.length; i++) {
    if (inputNum > inputArray[i]) {
      outputObj.count_inputGreaterThan = outputObj.count_inputGreaterThan + 1;
    } if (inputNum < inputArray[i]){
      outputObj.count_inputLessThan = outputObj.count_inputLessThan + 1;
    } if (inputNum === inputArray[i]) {
      outputObj.count_inputEqualTo = outputObj.count_inputEqualTo + 1;
    }
  } var setSize = (outputObj.count_inputGreaterThan + outputObj.count_inputLessThan + outputObj.count_inputEqualTo);
  return outputObj;
}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var parkingTicketsCount = [33, 44, 22, 21, 92, 63, 12, 42, 56, 11, 99,
482, 42, 56, 42, 19, 20, 88, 38, 18, 12, 64, 42, 21,
33, 31, 10, 84, 53, 13, 42, 4493, 31, 24, 55, 32, 42, 11, 56]

var stats_1  = showStats(42, parkingTicketsCount)
var stats_2 =  showStats(56, parkingTicketsCount)

console.log(stats_1)
console.log(stats_2)

console.assert( stats_1.setSize === 39  );
console.assert( stats_1.count_inputEqualTo === 6  ) ;
console.assert( stats_1.count_inputGreaterThan === 19  ) ;

console.assert( stats_2.count_inputGreaterThan === 28 ) ;
console.assert( stats_2.count_inputLessThan === 8 ) ;
