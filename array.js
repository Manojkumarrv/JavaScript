//let fruit = [
//    'pear','banana','pinnaple','orange','chiinmone'
//];
//fruit.forEach(item => console.log(item));

//const arraySparse = [1,3,,7]
//let numCallbackRuns = 0

//arraySparse.forEach(function(element) {
  //console.log(element)
  //numCallbackRuns++
//})

//console.log("numCallbackRuns: ", numCallbackRuns);

function manoj(key,element,array){return element % 2 ==1;}
function give(){let a=[1,45,46,90,51]
let get = a.some(manoj);
console.log(get);
}
give();
