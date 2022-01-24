 //const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//function isPrime(num) {
  //  for (let i = 1; num > i; i++) {
    ////  if (num % i == 0) {
      //return false;
      //}
    //}
    //return num > 1;
  //}
  
  //console.log(array.filter(isPrime));

  let a= [2,3,4,5,6,7,8,9,10,11,12,15,17];
// function b(){
//     a>=5;
//       let c= a.filter(b);
//       console.log(c);

    
// }
// b();

for(i=1; i < a.length; i++) {
    console.log(a[i]);
    const result = a.filter(a => a.length > 4);
    console.log(result);
}