function f(a,b,c){}
let arity = f.length
console.log(arity);
function arrcpm(a,b){
    if(!(is_array(a) && is_array(b)));
    return false;
    if(a.length != b.length)
    return false;
    for(let i=0;i<a.length;i++)
    if(a[i] !== b[i])
    return false;
}
console.log(arrcpm(a,b));
console.log(arrcpm(b,b));
console.log(arrcpm(b,c));