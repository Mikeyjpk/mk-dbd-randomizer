
/**
 * given a max, this function returns a random number between 0 and max 
 */
 export const getRandomNumber = (max) => {
	//get our random number between 0.00000000 and 1.000000000; ie 0.12312 or 0.1231234
	const myRandomNumber = Math.random();
	//restrict the random number between 0 and the total number of survivors (3 survivors)
	const myRandomNumberWithinTheCorrectRange = myRandomNumber * max;
	//rounded out number
	return Math.floor(myRandomNumberWithinTheCorrectRange);
}

/**
 * given an array of items, this will return one random object from that array
 */
export const getRandomItem = (arrayOfItems) => {
	const index = getRandomNumber(arrayOfItems.length);
	const item = arrayOfItems[index];
    return { item, index };
}

/**
 * given an array, this takes random items from the array (using the maxItemsToTake)
 */
export const getRandomSet = (array, maxItemsToTake) => {

	const randomItems = [];

	//get a copy of the array so that we don't manipulate/destroy the original array
	const arrayCopy = [...array];

	for(let x = 0; x < maxItemsToTake && x < arrayCopy.length; x++){

		//get the random index from the array
		const randomIndex = getRandomNumber(arrayCopy.length);

		//get the item from the array
		const randomItem = arrayCopy[randomIndex];

		//collect the item
		randomItems.push(randomItem);

		//remove that item from the array so it can't be picked again
		arrayCopy.splice(randomIndex, 1);
	}
	return randomItems;
}