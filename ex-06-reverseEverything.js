// Ex-06 : reverseEverything()

// Write a function called reverseEverything(). It should take as input an array of
// objects, and it should output an array of objects with all of the keys and values
// reversed. It should also reverse the order of the array.

// var someList = [
//  { name: 'bae', okay: 'cool', pastTime: 'counting' },
//  { name: 'whoa', what: 'sureman', pastTime: 'eating'}
//  { name: 'alright', no: 'yes', pastTime: 'knitting' }
// ]

// reverseEverything(someList) => [
//   {alright: 'name', yes: 'no', knitting: 'pastTime'}
//   ...
//   {bae: 'name', no: 'yes', couting: 'pastTime' }
// ]

// Hint, you may want to use reverseObject() as a helper function.



var reverseObject = function (inputObj){
	var outputObj = {};

	for (var thePropKey in inputObj) {
	  if (inputObj.hasOwnProperty(thePropKey)) {
	    outputObj[inputObj[thePropKey]] = thePropKey;
	  }
	}
	return outputObj;
}



var reverseEverything = function (newObject) {
  var reverseArray = [];

  for ( var i = newObject.length - 1; i >= 0; i--) {
   var reverseProp = newObject[i];
   reverseArray.push(reverseObject(reverseProp));
  }
  return reverseArray;
}




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var usersList = [
   { willis: 'president@gmail.com',hobby: 'basketball' , favoriteFood: "pate" },
   { benzo: 'bonjourben@yahoo.com', hobby:'dealmaking' , favoriteFood: "steak" },
   { yammer: 'yeb@aol.com', hobby: 'portraiture',  favoriteFood: "croissant" },
   { jimbo: 'coolguy@aol.com', hobby: 'dancing',  favoriteFood: "hotpockets" }
]
var flippedEverything = reverseEverything(usersList)

console.assert( flippedEverything[0]['coolguy@aol.com'] === 'jimbo' )
console.assert( flippedEverything[1].croissant === 'favoriteFood' )
console.assert( flippedEverything[1]['yeb@aol.com'] === 'yammer' )
console.assert( flippedEverything[2].dealmaking === 'hobby' )
