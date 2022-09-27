// Maximum sum contigous Subarray

const maximumSubArray = function(arr) {
    let max_cur=arr[0], max_global = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max_cur = Math.max(arr[i], max_cur + arr[i]);
        console.log(max_cur)
        max_global = Math.max(max_cur, max_global);
        // console.log(max_global)        
    } 
    console.log('end') 
    return max_global;
    
};
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maximumSubArray([-10, -11, -12]));


// const maximumSubArray = function(arr) {
//     let max_cur=arr[0], max_global = arr[0] ,sub_arr = [];
//     for (let i = 1; i < arr.length; i++) {
//         max_cur = Math.max(arr[i], max_cur + arr[i]);
//         console.log(max_cur)
        
//         max_global = Math.max(max_cur, max_global);
//         console.log(max_global)
//     }  
//     return max_global;
    
// };
// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// // console.log(maximumSubArray([-10, -11, -12]));

