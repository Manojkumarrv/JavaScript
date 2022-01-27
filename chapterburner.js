// let burner = new burner(burnerIndex.Upperleft);
// let skiller = new pan("cast iron");
// burner.place(skillet);
// burner.on();
// Range.run(1);
// console.log(burner);

export default class fridge {
    constructor(ingredient){
        this.item = ingredient ;
}
get(type){
    return this.item.filter(i => i,type = type, 0);

}
};

const Ingerident = [apple, orange, mango, maa, pala, vaalai];
let daire = new fridge(Ingerident);
let veg = daire.get(Ingerident.veg);
console.log(veg);