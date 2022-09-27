// Sort 0's 1's and 2's
function sortArrays(arr)
{
	// Finding the length of array 'arr'
		let length = arr.length;
		// Sorting using a single loop
		for (let i = 0; i < length - 1; i++) {
			// Checking the condition for two
			// simultaneous elements of the array
			if (arr[i] > arr[i + 1]) {
				// Swapping the elements.
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				// updating the value of i = -1
				// so after getting updated for j++
				// in the loop it becomes 0 and
				// the loop begins from the start.
                console.log(arr)
				i = -1;
			}
		}
		return arr;
}

let arr = [2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0];

console.time()
console.log(sortArrays(arr))
console.timeEnd()

