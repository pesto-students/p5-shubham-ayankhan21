    function printNGE(arr, n)
	{
		var s = [];
		let res = []
		for (let i = n - 1; i >= 0; i--)
		{
			if (s.length != 0){
				while (s[s.length-1] <= arr[i]){
					s.pop();
				}
			}
			res[i] = s.length == 0 ? -1 : s[s.length-1];
			s.push(arr[i]);
		}
		for (let i = 0; i < arr.length; i++){
			console.log(res[i])
        }
	}
	

let arr = [ 11, 13, 21, 3 ];
let n = arr.length;

console.log(printNGE(arr, n));


