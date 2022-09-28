// Sort 0's 1's and 2's
function sortArrays(arr){
		let length = arr.length;
		for (let i = 0; i < length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				// Swapping the elements.
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
                // console.log(arr)
				i = -1;
			}
		}
		return arr;
}

let arr = [2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0];

console.time()
console.log(sortArrays(arr))
console.timeEnd()

