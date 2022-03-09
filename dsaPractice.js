// Swepping to Numbers in Array
const arr = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
 ];
 const transpose = arr => {
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < i; j++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[j][i];
          arr[j][i] = tmp;
       };
    }
 }
 transpose(arr);
 console.log(arr);



//last Occurence By Binary Search
shortedArray = [-10,2,2,2,3,4,4,6,6,9];
target = 10;

function binarySearchLastOccurence(arr , numberTobeSearch ){
   let l = 0;
   let h = arr.length - 1;
   let result = -1;

   while(l <= h){
      mid = Math.floor(l + (h-l)/2);
      if(arr[mid]===numberTobeSearch){
         result = mid;
         l = mid+1;
         return mid
      }
      if(arr[mid] < numberTobeSearch){
         l = mid + 1;
      } else if (arr[mid] > numberTobeSearch) {
         h = mid - 1;
      }
   }
   return result;
}

var solution = binarySearchLastOccurence(shortedArray , target);
console.log("solution===49==="+solution);



//First Occurence By Binary Search  inder no. =20
shortedArray = [-10,2,2,2,3,4,4,6,6,7,7,7,7,9,9,9,9,9,9,9];
target = 7;

function binarySearchFirstOccurence ( arr , numberTobeSearch ) {
   l = 0;
   h = arr.length - 1;
   result = -1;

   while( l <= h ){
      mid = Math.floor( l + ( h - l )/2 );
      if( arr[mid] === numberTobeSearch ){
         result =  mid;
         h = mid-1; 
      }
      if( arr[mid] < numberTobeSearch ){
         l = mid + 1;
      } else {
         l = mid - 1;
      } 
   }
   return result;
}

var solution = binarySearchFirstOccurence( shortedArray , target );
console.log("solution===75==="+solution);


// Find Perfect Square of a number by Build-in method Math.sqrt()
// var a = prompt("Enter a Number");
//     a = parseInt(a);
// var b = Math.sqrt(a);
// console.log("b===82==="+b);





// Find Perfect Square of a number by Build-in method Math.sqrt()

// function PerfectSquare(){
//    var a = prompt("Enter a Number");
//    a = parseInt(a);
// }


// How to Print "*" Piramit
function printPiramid (){
   var   i , j ;
   for ( i=1 ; i <=5 ; i++ ) {
      for ( j=1 ; j <=i ; j++  ) {
         document.write( "* &nbsp; &nbsp; " );
      }
      document.write( "<br>" );
   }

}

var solution = printPiramid();
console.log("solution===109==="+solution);


// How to Print "*" Piramit in Lower Case
function printPiramid (){
   var   i , j ;
   for ( i=5 ; i >= 1 ; i-- ) {
      for ( j=1 ; j <= i ; j++ ) {
         document.write( "* &nbsp; &nbsp; " );
      }
      document.write( "<br>" );
   }

}

var solution = printPiramid();
console.log("solution===125==="+solution);


// How to Print Number Piramit
function printPiramid (){
   var   i , j ;
   var spaces;
   for ( i=1 ; i <=5 ; i++ ) {
      for(spaces=1; spaces<=30-i;spaces++){
         document.write("&nbsp; &nbsp;");
      }
      for ( j=1 ; j <=i ; j++ ) {
         document.write( i+" &nbsp; &nbsp; " );
      }
      document.write( "<br>" );
   }

}

var solution = printPiramid();
console.log("solution===142==="+solution);


// How to find Duplicate Number in Array.
function findDuplicate (arr) {
   const dups = [];
   const compare = [];
    
   for(let num of arr){
      if(!compare.includes(num)){
         compare.push(num)
      } else {
         dups.push(num)
      }
   }
   return dups;
   return compare;
}

shortedArray = [-10,2,2,2,3,4,4,6,6,7,7,7,7,9,9,9,9,9,9,9];
var solution = findDuplicate(shortedArray);
console.log("solution===165==="+solution);


// How to find Perfect Square Number;
function PerfectSquare(num){
   let l = 0;
   let h = num;

   while (l <= h){
      let mid = Math.floor((h-l)/2);
      console.log("l , h , Mid===177---"+l , h ,mid);
      let squareNumber = mid*mid;
      if(squareNumber === num){
         return true;
      }
      if(squareNumber > num){
         h = mid-1;
      }else{
         l = mid+1;
      }
   }
   return false;
}

target = 25;
var solution = PerfectSquare(target);
console.log("solution===165==="+solution);


//  Find a Number in Array By Linear Seacrh
let input_arr = 
[ [1,2,3],
  [4,5,6],
  [7,8,9] ];

function byLinearSearch (arr , target) {
   let i = 0, j = 0;
   let result = [-1, -1, -1];
   for(; i<=arr.length-1; i++){
      for(; j<=i; j++){
         if(arr[i][j] === target){
            result = [i , j]
         }
      }
   }
   return result;
}

console.log("byLinearSearch(input_arr , 1)==215=="+byLinearSearch(input_arr , 1)); 
console.log("byLinearSearch(input_arr , 5)==216=="+byLinearSearch(input_arr , 5));
console.log("byLinearSearch(input_arr , 9)==217=="+byLinearSearch(input_arr , 9));



//Short array by Bubble Short
function bubbleSortFunction (array) {
   for(let i = 0; i < array.length - 1; i++){
      for(let j = 0; j < array.length - 1 - i; j++){
         if(array[j] > array[j+1] ){
            [array[j],array[j+1]] = [array[j+1],array[j]];
            // const temp = array[j];
            // array[j] = array[j+1];
            // array[j+1] = temp;
         }
      }
   }
   return array;
}

array = [8,6,9,5,7,4,3,1,2];
var solution = bubbleSortFunction(array);
console.log("solution===279=== " + solution);



// Array sort by Selectin sort
function selectionSort(arr){
   for(let i=0; i<arr.length-1; i++){
      let midIndex = i;
      for(let j=i+1; j<arr.length; j++){
         if(arr[j] < arr[midIndex]){
            midIndex = j;
         }
      }
      [arr[i],arr[midIndex]] = [arr[midIndex],arr[i]];
      // let temp = arr[i];
      // arr[i] = arr[midIndex];
      // arr[midIndex] = temp;
   }
   return arr;
}

array = [9,7,2,8,6,4,3,1,5];
var solution = selectionSort(array);
console.log("solution===261=== " + solution);


// Array sort by Inserption sort
function insertionSort (arr) {
   for(let i=1; i<arr.length; i++){
      for(let j=i; j>0; j--){
         if(arr[j]<arr[j-1]){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            // let temp = arr[j];
            // arr[j] = arr[j-1];
            // arr[j-1] = temp;
         }
      }
   }
   return arr;
}

array = [9,7,2,8,6,4,3,1,5];
var solution = insertionSort(array);
console.log(solution);
console.log("solution===280=== " + solution);


//Sorted Array by javaScript Sort Method
number = [8,6,9,5,7,4,3,1,2];

number.sort();

function sortNumbers(a , b){
    return a - b ;
};

console.log(number);



// How to sort Array by use Quick sort
function quickSort (arr) {
   if(arr.length === 1){
      return arr;
   }

   const pivot = arr[arr.length - 1];
   const leftArr = [];
   const rightArr = [];
   for(let i=0; i<arr.length - 1; i++){
      if(arr[i] < pivot){
         leftArr.push(arr[i]);
      } else {
         rightArr.push(arr[i]);
      }
   }
   
   if(leftArr.length > 0 && rightArr.length > 0){
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
   } else if (leftArr.length > 0) {
      return [...quickSort(leftArr), pivot];
   } else {
      return [pivot, ...quickSort(rightArr)];
   }

}

array = [99,3,54,23,56,74,73,82,564,2,65,784,83,234,1];
var solution = quickSort(array);
console.log("solutin===327=== " + solution);



// How to sort Array by use Quick Sort
const merge = (leftArr , rightArr) => {
   const output = [];
   let leftIndex = 0;
   let rightIndex = 0;

   while (leftIndex < leftArr.length && rightIndex < rightArr.length ){
      const leftEl = leftArr[leftIndex];
      const rightEl = rightArr[rightIndex];

      if(leftEl < rightEl){
         output.push(leftEl);
         leftIndex++;
      } else {
         output.push(rightEl);
         rightIndex++;
      }
   }
   return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];

}; 
 
const mergeSort = array => {
   if (array.length < 1){
      return array;
   }
  
   const middleIndex = Math.floor(array.length/2);
   const leftArr = array.slice(0, middleIndex);
   const rightArr = array.slice(middleIndex);

   return merge(
      mergeSort(leftArr),
      mergeSort(rightArr)
   );

}


leftArray = [5,44,73,78,89];
rightArr = [32,55,23,43,63];
var solutin = mergeSort(leftArray , rightArr);
console.log("solutin===356=== " + solutin);
console.log(mergeSort(leftArray , rightArr));










