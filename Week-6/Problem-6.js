// 3 sum closest to the target

function sum(arr, x)
{
    arr.sort();
    let closestSum = 1000000000;
    for (let i = 0; i < arr.length - 2; i++)
    {
        let start = i + 1, end = arr.length - 1;
        while (start < end) {
            let sum = arr[i] + arr[start] + arr[end];
            if (Math.abs(x - sum) < Math.abs(x - closestSum))
            {
                closestSum = sum;
            }

            if (sum > x) {
                end--;
            }
            else {
                start++;
            }
        }
    }
    return closestSum;
}

let arr = [ -1, 2, 1, -4 ];
let x = 1;
console.log(sum(arr, x));