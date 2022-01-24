let boomarang = a => "returns";
let b = a => {return "returns";}
let c = a => {return random() >= 0.5};
let time = a => {"wont return";}

let a = [1];

boomarang(1);
b(1);
time(1);

// a.map(boomarang);
// a.map(b);
// a.map(time);

console.log(a.map(boomarang));
console.log(a.map(b));
console.log(a.map(time));