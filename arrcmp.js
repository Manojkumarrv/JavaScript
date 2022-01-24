let a=[1,2];
let b=[1,2];
let c=[5,5];
function arrcpm(a,b){
    if(!((a) && (b)));
    return false;
    if(a.length != b.length)
    return false;
    for(let i=0;i<a.length;i++)
    if(a[i] !== b[i])
    return false;
    return true;
}
console.log(arrcpm(a,b));
console.log(arrcpm(b,b));
console.log(arrcpm(b,c));