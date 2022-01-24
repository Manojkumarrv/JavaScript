// function one(value){
//     console.log(value *2);}
//     value = [1,2,3,4];

// function manoj(a,b){
//     a=1;
//     b=2;
//     return a + b;
// }
// manoj();

function map(array,f){
    let copy = [];
    for(let index=0; index < array.length;index++){
        let original = array [index];
        let modification = f(originals);
        copy[index] = modified;
    }
    return copy;
}