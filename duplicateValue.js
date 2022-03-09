console.log("Shorting Any Array");

// const names = ['Jai','Liam','Florin','Ivan'];
// names.sort();

// const number = [15,12,19,16,20,43,39,74,66];

// number.sort(numberSort);
// number < 0 ... a will come
   // number = 0 ... nothing will come
   // number > 0 ... b will come
// function numberSort (a,b){

//     return a-b;
// }

// console.log(number);

// const products = [
//     {
//       name : 'laptop',
//       price : 1000
//     },
//     {
//         name : 'Phone',
//         price : 500
//     },
//     {
//         name : 'Desktop',
//         price : 1500
//     }
// ];

// products.sort((a,b)=>{
//     return b.price-a.price;
// })
// console.log(products);


// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = [];
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);

let array = [7,4,8,3,5,9,2,7,4,9,12,45,32,24,13,21,151,764,534,424,];

function binarySearch (arr , value){
    let high = arr.length-1;
    let low = 0;
    let mid = 0;

    while(low <= high){
       mid = Math.floor((high+low)/2);

       if(arr[mid]==value){
           return arr[mid]
       }else if(value>arr[mid]){
          low = mid + 1;
       } else {
           high = mid - 1;
       }
    }
    return -1;
}

let Sorted = array.sort(function (a,b){return a-b});
console.log(Sorted);

let CompleteBinarySearch = binarySearch(Sorted,99);
console.log(CompleteBinarySearch);











