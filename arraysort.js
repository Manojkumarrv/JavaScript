//let number=[5,3,4,2];
//number.sort(function(a,b) {return a-b})
//console.log(number);

let fruit=[
    {Name:"maa", count:10,},
    {Name:"palaa", count:12,},
    {Name:"vaalai", count:13,},
    {Name:"atthipalam", count:15,},
    {Name:"sappotaa", count:14,},
    {Name:"madhulai", count:11,}
];
let my_sort = (a,b) => a.count-b.count;
let mukkani = fruit.sort(my_sort);
console.log(mukkani);